"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{
    const PLUGIN_ID = "MohammadHadi_CordovaToast";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.1";
    const PLUGIN_CATEGORY = "other";
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.MohammadHadi_CordovaToast = class MohammadHadi_CordovaToast extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);
            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetIcon("icon.svg", "image/svg+xml");
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("MohammadHadi");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetSupportedRuntimes(["c3"]);
            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
            ]);
            this._info.AddCordovaPluginReference(
                {
                    id: "cordova-plugin-x-toast",
                    plugin: this,
                });
            SDK.Lang.PopContext();
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}