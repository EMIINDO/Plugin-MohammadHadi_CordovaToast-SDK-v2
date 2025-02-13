"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.MohammadHadi_CordovaToast;
    PLUGIN_CLASS.Instance = class MohammadHadi_CordovaToastInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }
        Release() { }
        OnCreate() { }
        OnPropertyChanged(id, value) { }
        LoadC2Property(name, valueString) {
            return false;
        }
    };
}