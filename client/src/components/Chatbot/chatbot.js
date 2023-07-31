import React, { Component } from "react";

import { Helmet } from "react-helmet";

export default function KommunicateChat() {
  return (
    <>
      <Helmet>


      <script
src='//fw-cdn.com/2509231/3060946.js'
chat='true'
widgetId='7d5c3169-edf5-47b6-a496-747dfdc0898e'>
</script>

      </Helmet>
      ...
    </>
  );
}

// class KommunicateChat extends Component {
//    constructor(props){
//        super(props);
//    }
// //    <script
// // src='//fw-cdn.com/2509231/3060946.js'
// // chat='true'
// // widgetId='b10459e6-c86f-4ec2-9b8f-2108af5aab3d'>
// // </script>
// componentDidMount(){
//    (function(d, m){
//        var kommunicateSettings =
//            {"widgetId":"b10459e6-c86f-4ec2-9b8f-2108af5aab3d","chat":true};
//        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//        s.src = "//fw-cdn.com/2509231/3060946.js";
//        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//        window.kommunicate = m; m._globals = kommunicateSettings;
//    })(document, window.kommunicate || {});
// }
// render(){
//    return(
//        <div>
//            <h1>Hello</h1>
//      </div>
//    )
// }

// }

// export default KommunicateChat;
