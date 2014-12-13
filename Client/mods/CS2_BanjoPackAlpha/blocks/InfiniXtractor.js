name = "InfiniXtractor";
creativeTab = "decorations";
material = "iron";

addToCreative[0] = true;
hardness[0] = 50.0;
resistance[0] = 50.0;
drop[0] = "BanjoPackAlpha:InfiniXtractor";
textureFileFront[0] = "furnacefrontOff.png";
textureFileBack[0] = "furnaceside.png";
textureFileSides[0] = "furnaceside.png";
onActivated[0] = "player.openGui('InfiniXtractorGUI', position); result = true;";
hasTileEntity[0] = true;
tileEntity[0] = "InfiniXtractorTE";

hardness[1] = 1000.0;
resistance[1] = 150.0;
drop[0] = "BanjoPackAlpha:InfiniXtractor";
textureFileFront[1] = "furnacefrontOn.png";
textureFileBack[1] = "furnaceside.png";
textureFileSides[1] = "furnaceside.png";
light[1] = 15;
onActivated[1] = "player.openGui('InfiniXtractorGUI', position); result = true;";
hasTileEntity[1] = true;
tileEntity[1] = "InfiniXtractorTE";