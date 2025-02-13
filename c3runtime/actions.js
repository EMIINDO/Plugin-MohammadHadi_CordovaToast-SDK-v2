"use strict";
{
    globalThis.C3.Plugins.MohammadHadi_CordovaToast.Acts = {
        Showtoast(message, duration, position)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                var durationStr = "short";
                if (duration == 1)
                {
                    durationStr = "long";
                }
                var positionStr = "top";
                if (position == 1)
                {
                    positionStr = "center";
                }
                else if (position == 2)
                {
                    positionStr = "bottom";
                }
                window["plugins"]["toast"]["show"](message, durationStr, positionStr,

                function(info)
                {
                    //alert('success: ' + info);
                },

                function(error)
                {
                    //alert('fail: ' + error);
                });
            }
        }
    };
}