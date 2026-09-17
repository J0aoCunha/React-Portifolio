import { useState } from "react";
import TitleBar from "./components/ide/TitleBar";
import ActivityBar from "./components/ide/ActivityBar";
import Explorer from "./components/ide/Explorer";
import TabBar from "./components/ide/TabBar";
import EditorPane from "./components/ide/EditorPane";
import StatusBar from "./components/ide/StatusBar";
import { DEFAULT_OPEN_TABS } from "./data/files";

import "./index.css";

function App() {
	const [openTabs, setOpenTabs] = useState<string[]>(DEFAULT_OPEN_TABS);
	const [activeTab, setActiveTab] = useState<string | null>(
		DEFAULT_OPEN_TABS[0] ?? null,
	);
	const [explorerOpen, setExplorerOpen] = useState(false);

	function openFile(id: string) {
		setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
		setActiveTab(id);
		setExplorerOpen(false);
	}

	function closeTab(id: string) {
		setOpenTabs((prev) => {
			const idx = prev.indexOf(id);
			const next = prev.filter((tab) => tab !== id);
			if (activeTab === id) {
				setActiveTab(next[idx] ?? next[idx - 1] ?? null);
			}
			return next;
		});
	}

	return (
		<div className="w-full h-dvh flex flex-col bg-editor font-mono overflow-hidden">
			<TitleBar />

			<div className="flex-1 flex min-h-0 relative">
				<ActivityBar
					explorerOpen={explorerOpen}
					onToggleExplorer={() => setExplorerOpen((open) => !open)}
				/>

				{explorerOpen && (
					<div
						className="fixed top-9 bottom-6 left-12 right-0 z-20 bg-black/50 sm:hidden"
						onClick={() => setExplorerOpen(false)}
					/>
				)}

				<div
					className={`${explorerOpen ? "flex" : "hidden"} sm:flex flex-col fixed sm:static top-9 sm:top-auto bottom-6 sm:bottom-auto left-12 sm:left-auto z-30 sm:z-auto w-48 sm:w-48 md:w-56 lg:w-64 shrink-0 border-r border-line bg-sidebar`}
				>
					<Explorer activeTab={activeTab} onOpenFile={openFile} />
				</div>

				<div className="flex-1 flex flex-col min-w-0">
					<TabBar
						openTabs={openTabs}
						activeTab={activeTab}
						onSelect={setActiveTab}
						onClose={closeTab}
					/>
					<EditorPane activeTab={activeTab} />
				</div>
			</div>

			<StatusBar activeTab={activeTab} />
		</div>
	);
}

export default App;
