import i18n from './i18n'
import { shell } from 'electron'
import { wtutils} from './wtutils';

// Menu template
const menuTemplate = [
    {
       // File menu
      label: i18n.t("Common.Menu.File.menuFile"),      
      submenu:
      [   
        wtutils.isMac ?
          {             
              label: i18n.t("Common.Menu.File.menuOpenLogDir"),
              click: () => { shell.openItem(wtutils.LogMac) }  
          } : 
          { 
            ...wtutils.isLinux ? 
            { 
              label: i18n.t("Common.Menu.File.menuOpenLogDir"),          
              click: () => { shell.openItem(wtutils.LogLinux) }           
            } : {
              ...wtutils.isWindows ? 
              { 
                label: i18n.t("Common.Menu.File.menuOpenLogDir"),
                click: () => { shell.openItem(wtutils.LogWin) } 
              } : {}
          },
        },
        {
          label: i18n.t("Common.Menu.File.menuQuit"),
          role: 'quit'
        }      
      ]
    },
    {
      // Edit menu
      label: i18n.t("Common.Menu.Edit.menuEdit"),
      submenu:
      [
        {
          label: i18n.t("Common.Menu.Edit.menuUndo"),
          role: 'undo'
        },
        {
          label: i18n.t("Common.Menu.Edit.menuRedo"),
          role: 'redo'
        },
        {
          type: 'separator'          
        },
        {
          label: i18n.t("Common.Menu.Edit.menuCut"),
          role: 'cut'
        },
        {
          label: i18n.t("Common.Menu.Edit.menuCopy"),
          role: 'copy'
        },
        {
          label: i18n.t("Common.Menu.Edit.menuPaste"),
          role: 'paste'
        },
        {
          label: i18n.t("Common.Menu.Edit.menuDelete"),
          role: 'delete'
        },
        {
          label: i18n.t("Common.Menu.Edit.menuSelectAll"),
          role: 'selectAll'
        }
      ]
    },
    {
      // View Menu
      label: i18n.t("Common.Menu.View.menuView"),
      submenu:
      [
        {
          label: i18n.t("Common.Menu.View.menuReload"),
          role: 'reload'
        },
        {
          label: i18n.t("Common.Menu.View.menuForceReload"),
          role: 'forceReload'
        },
        wtutils.isDev ?
          {             
            label: i18n.t("Common.Menu.View.menuToggleDeveloperTools"),
            role: 'toggleDevTools'
          }: {
            label: "nothere",
            visible: false            
          },
        {
          type: 'separator'          
        },
        {
          label: i18n.t("Common.Menu.View.menuActualSize"),
          role: 'resetZoom'
        },
        {
          label: i18n.t("Common.Menu.View.menuZoomIn"),
          role: 'zoomIn'
        },
        {
          label: i18n.t("Common.Menu.View.menuZoomOut"),
          role: 'zoomOut'
        },
        {
          label: i18n.t("Common.Menu.View.menuToggleFullScreen"),
          role: 'togglefullscreen'
        }
      ]
    },
    {
      // Help Menu
      label: i18n.t("Common.Menu.Help.menuHelp"),
      submenu:
      [
        {
          label: i18n.t("Common.Menu.Help.menuForum"),
          click: () => { shell.openExternal("https://forums.plex.tv/t/598539") }          
        },
        {
          label: i18n.t("Common.Menu.Help.menuGithub"),   
          click: () => { shell.openExternal("https://github.com/WebTools-NG/WebTools-NG") }          
        },
        {
          label: i18n.t("Common.Menu.Help.menuManual"),
          click: () => { shell.openExternal("https://github.com/WebTools-NG/WebTools-NG/wiki") }          
        }
      ]
    }
  ]

export default menuTemplate;

  