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

	function openFile(id: string) {
		setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
		setActiveTab(id);
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
		<div className="w-full h-screen flex flex-col bg-editor font-mono overflow-hidden">
			<TitleBar />

			<div className="flex-1 flex min-h-0">
				<ActivityBar />

				<div className="w-32 sm:w-48 md:w-56 lg:w-64 shrink-0 border-r border-line">
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
