'use strict';
/// const path = require('path');
const {app, Menu, shell} = require('electron');
const {
	is
	/// appMenu,
	/// aboutMenuItem,
	/// openUrlMenuItem,
	/// openNewGitHubIssue,
	/// debugInfo
} = require('electron-util');
const config = require('./config');

/**
 * NO PREFERENCES USED
const showPreferences = () => {
	// Show the app's preferences here
};
*/

/**
 * NO HELP MENU
const helpSubmenu = [
	openUrlMenuItem({
		label: 'Website',
		url: 'https://github.com/sindresorhus/electron-boilerplate'
	}),
	openUrlMenuItem({
		label: 'Source Code',
		url: 'https://github.com/sindresorhus/electron-boilerplate'
	}),
	{
		label: 'Report an Issue…',
		click() {
			const body = `
<!-- Please succinctly describe your issue and steps to reproduce it. -->

---

${debugInfo()}`;

			openNewGitHubIssue({
				user: 'frncesc',
				repo: 'static-electron-test',
				body
			});
		}
	}
];

if (!is.macos) {
	helpSubmenu.push(
		{
			type: 'separator'
		},
		aboutMenuItem({
			icon: path.join(__dirname, 'static', 'icon.png'),
			text: 'Created by ...'
		})
	);
}
*/

// Debug menú is only shown in devel mode
const debugSubmenu = [
	{
		label: 'Show Settings',
		click() {
			config.openInEditor();
		}
	},
	{
		label: 'Show App Data',
		click() {
			shell.openPath(app.getPath('userData'));
		}
	},
	{
		type: 'separator'
	},
	{
		label: 'Delete Settings',
		click() {
			config.clear();
			app.relaunch();
			app.quit();
		}
	},
	{
		label: 'Delete App Data',
		click() {
			shell.moveItemToTrash(app.getPath('userData'));
			app.relaunch();
			app.quit();
		}
	}
];

const macosTemplate = [
	/**
	 * NO 'app' MENU
	appMenu([
		{
			label: 'Preferences…',
			accelerator: 'Command+,',
			click() {
				showPreferences();
			}
		}
	]),
	 */
	{
		role: 'fileMenu',
		submenu: [
			/**
			 * Show just the 'close' option
			{
				label: 'Custom'
			},
			{
				type: 'separator'
			},
			 */
			{
				role: 'close'
			}
		]
	},
	/**
	 * NO 'edit' MENU
	{
		role: 'editMenu'
	},
	 */
	{
		role: 'viewMenu'
	},
	{
		role: 'windowMenu'
	}
	/*
		{
			role: 'help',
			submenu: helpSubmenu
		}
	*/
];

// Linux and Windows
const otherTemplate = [
	{
		role: 'fileMenu',
		submenu: [
			/**
			 * Show just the 'quit' option
			{
				label: 'Custom'
			},
			{
				type: 'separator'
			},
			{
				label: 'Settings',
				accelerator: 'Control+,',
				click() {
					showPreferences();
				}
			},
			{
				type: 'separator'
			},
			 */
			{
				role: 'quit'
			}
		]
	},
	/**
	 * NO 'edit' MENU
	{
		role: 'editMenu'
	},
	 */
	{
		role: 'viewMenu'
	}
	/**
	 * NO 'help' menu
		{
			role: 'help',
			submenu: helpSubmenu
		}
	*/
];

const template = process.platform === 'darwin' ? macosTemplate : otherTemplate;

if (is.development) {
	template.push({
		label: 'Debug',
		submenu: debugSubmenu
	});
}

module.exports = Menu.buildFromTemplate(template);
