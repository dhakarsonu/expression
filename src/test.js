// let step1 = "", step2 = "",step3 = "",step4 = "",step5 = "",step6 = "",step7 = "",step8 = ""
//     ,step9 = "",step10 = "";
//     let parents = ref.split(",");
//     parents.map((key)=>{
//       let localObj = {};
//       let localParent = {};
//         if(!step1 && parents.length > 0){
//           localObj = data[key]["child"];
//           localParent = data[key];
//           step1 = key;
//         }
//         if(!step2 && parents.length > 1 && step1 != key && step1){
//           localObj = data[step1]["child"][key]["child"];
//           localParent = data[step1]["child"][key];
//           step2 = key;
//         }
//         if(!step3 && parents.length > 2 && step2 != key && step2){
//           localObj = data[step1]["child"][step2]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][key];
//           step3 = key;
//         }
//         if(!step4 && parents.length > 3 && step3 != key && step3){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][key];
//           step4 = key;
//         }
//         if(!step5 && parents.length > 4 && step4 != key && step4){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][key];
//           step5 = key;
//         }
//         if(!step6 && parents.length > 5 && step5 != key && step5){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][key];
//           step6 = key;
//         }
//         if(!step7 && parents.length > 6 && step6 != key && step6){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][key];
//           step7 = key;
//         }
//         if(!step8 && parents.length > 7 && step7 != key  && step7){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][key];
//           step8 = key;
//         }
//         if(!step9 && parents.length > 8 && step8 != key  && step8){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][step8]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][step8]["child"][key];
//           step9 = key;
//         }
//         if(!step10 && parents.length > 9 && step9 != key  && step9){
//           localObj = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][step8]["child"][step9]["child"][key]["child"];
//           localParent = data[step1]["child"][step2]["child"][step3]["child"][step4]["child"][step5]["child"][step6]["child"][step7]["child"][step8]["child"][step9]["child"][key]
//           step10 = key;
//         }
//       if(!Object.keys(localObj).length){
//         localParent["child"] = option
//       }
//     });