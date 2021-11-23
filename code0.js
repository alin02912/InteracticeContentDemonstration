gdjs.Scene_321Code = {};
gdjs.Scene_321Code.GDContactInfoObjects1= [];
gdjs.Scene_321Code.GDContactInfoObjects2= [];
gdjs.Scene_321Code.GDAnswer1Objects1= [];
gdjs.Scene_321Code.GDAnswer1Objects2= [];
gdjs.Scene_321Code.GDQuestion1Objects1= [];
gdjs.Scene_321Code.GDQuestion1Objects2= [];
gdjs.Scene_321Code.GDQuestion2Objects1= [];
gdjs.Scene_321Code.GDQuestion2Objects2= [];
gdjs.Scene_321Code.GDAnswer2Objects1= [];
gdjs.Scene_321Code.GDAnswer2Objects2= [];

gdjs.Scene_321Code.conditionTrue_0 = {val:false};
gdjs.Scene_321Code.condition0IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition1IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition2IsTrue_0 = {val:false};


gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDAnswer1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDAnswer2Objects1Objects = Hashtable.newFrom({"Answer1": gdjs.Scene_321Code.GDAnswer1Objects1, "Answer2": gdjs.Scene_321Code.GDAnswer2Objects1});gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDQuestion1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDQuestion2Objects1Objects = Hashtable.newFrom({"Question1": gdjs.Scene_321Code.GDQuestion1Objects1, "Question2": gdjs.Scene_321Code.GDQuestion2Objects1});gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDAnswer1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDAnswer2Objects1Objects = Hashtable.newFrom({"Answer1": gdjs.Scene_321Code.GDAnswer1Objects1, "Answer2": gdjs.Scene_321Code.GDAnswer2Objects1});gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDQuestion1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDQuestion2Objects1Objects = Hashtable.newFrom({"Question1": gdjs.Scene_321Code.GDQuestion1Objects1, "Question2": gdjs.Scene_321Code.GDQuestion2Objects1});gdjs.Scene_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.Scene_321Code.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.Scene_321Code.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scene_321Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Scene_321Code.GDQuestion2Objects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Scene_321Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDAnswer1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDAnswer2Objects1Objects, gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDQuestion1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDQuestion2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDAnswer1Objects1.length;i<l;++i) {
    if ( gdjs.Scene_321Code.GDAnswer1Objects1[i].getVariableNumber(gdjs.Scene_321Code.GDAnswer1Objects1[i].getVariables().get("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Scene_321Code.GDQuestion2Objects1.length === 0 ) ? ((gdjs.Scene_321Code.GDQuestion1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_321Code.GDQuestion1Objects1[0].getVariables()) : gdjs.Scene_321Code.GDQuestion2Objects1[0].getVariables()).get("ID"))) ) {
        gdjs.Scene_321Code.condition1IsTrue_0.val = true;
        gdjs.Scene_321Code.GDAnswer1Objects1[k] = gdjs.Scene_321Code.GDAnswer1Objects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDAnswer1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDAnswer2Objects1.length;i<l;++i) {
    if ( gdjs.Scene_321Code.GDAnswer2Objects1[i].getVariableNumber(gdjs.Scene_321Code.GDAnswer2Objects1[i].getVariables().get("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Scene_321Code.GDQuestion2Objects1.length === 0 ) ? ((gdjs.Scene_321Code.GDQuestion1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_321Code.GDQuestion1Objects1[0].getVariables()) : gdjs.Scene_321Code.GDQuestion2Objects1[0].getVariables()).get("ID"))) ) {
        gdjs.Scene_321Code.condition1IsTrue_0.val = true;
        gdjs.Scene_321Code.GDAnswer2Objects1[k] = gdjs.Scene_321Code.GDAnswer2Objects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDAnswer2Objects1.length = k;}}
if (gdjs.Scene_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDAnswer1Objects1 */
/* Reuse gdjs.Scene_321Code.GDAnswer2Objects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer1Objects1[i].setX(50);
}
for(var i = 0, len = gdjs.Scene_321Code.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer2Objects1[i].setX(50);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer1Objects1[i].setY(280);
}
for(var i = 0, len = gdjs.Scene_321Code.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer2Objects1[i].setY(280);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "156;241;142");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Right-answer-ding-ding-sound-effect.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BackgroundColour");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.Scene_321Code.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.Scene_321Code.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scene_321Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Scene_321Code.GDQuestion2Objects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Scene_321Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDAnswer1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDAnswer2Objects1Objects, gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDQuestion1Objects1ObjectsGDgdjs_46Scene_95321Code_46GDQuestion2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDAnswer1Objects1.length;i<l;++i) {
    if ( !(gdjs.Scene_321Code.GDAnswer1Objects1[i].getVariableNumber(gdjs.Scene_321Code.GDAnswer1Objects1[i].getVariables().get("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Scene_321Code.GDQuestion2Objects1.length === 0 ) ? ((gdjs.Scene_321Code.GDQuestion1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_321Code.GDQuestion1Objects1[0].getVariables()) : gdjs.Scene_321Code.GDQuestion2Objects1[0].getVariables()).get("ID")))) ) {
        gdjs.Scene_321Code.condition1IsTrue_0.val = true;
        gdjs.Scene_321Code.GDAnswer1Objects1[k] = gdjs.Scene_321Code.GDAnswer1Objects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDAnswer1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDAnswer2Objects1.length;i<l;++i) {
    if ( !(gdjs.Scene_321Code.GDAnswer2Objects1[i].getVariableNumber(gdjs.Scene_321Code.GDAnswer2Objects1[i].getVariables().get("ID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Scene_321Code.GDQuestion2Objects1.length === 0 ) ? ((gdjs.Scene_321Code.GDQuestion1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Scene_321Code.GDQuestion1Objects1[0].getVariables()) : gdjs.Scene_321Code.GDQuestion2Objects1[0].getVariables()).get("ID")))) ) {
        gdjs.Scene_321Code.condition1IsTrue_0.val = true;
        gdjs.Scene_321Code.GDAnswer2Objects1[k] = gdjs.Scene_321Code.GDAnswer2Objects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDAnswer2Objects1.length = k;}}
if (gdjs.Scene_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDAnswer1Objects1 */
/* Reuse gdjs.Scene_321Code.GDAnswer2Objects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer1Objects1[i].setX(50);
}
for(var i = 0, len = gdjs.Scene_321Code.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer2Objects1[i].setX(50);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer1Objects1[i].setY(280);
}
for(var i = 0, len = gdjs.Scene_321Code.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDAnswer2Objects1[i].setY(280);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "250;80;65");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Wrong Clakson Sound Effect.mp3", false, 100, 2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BackgroundColour");
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "BackgroundColour");
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "240;240;150");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "BackgroundColour");
}}

}


};

gdjs.Scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_321Code.GDContactInfoObjects1.length = 0;
gdjs.Scene_321Code.GDContactInfoObjects2.length = 0;
gdjs.Scene_321Code.GDAnswer1Objects1.length = 0;
gdjs.Scene_321Code.GDAnswer1Objects2.length = 0;
gdjs.Scene_321Code.GDQuestion1Objects1.length = 0;
gdjs.Scene_321Code.GDQuestion1Objects2.length = 0;
gdjs.Scene_321Code.GDQuestion2Objects1.length = 0;
gdjs.Scene_321Code.GDQuestion2Objects2.length = 0;
gdjs.Scene_321Code.GDAnswer2Objects1.length = 0;
gdjs.Scene_321Code.GDAnswer2Objects2.length = 0;

gdjs.Scene_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Scene_321Code'] = gdjs.Scene_321Code;
