name = "InfiniXilifier";
creativeTab = "decorations";
material = "iron";

addToCreative[0] = true;
hardness[0] = 25.0;
resistance[0] = 12.0;
drop[0] = "BanjoPackAlpha:InfiniXilifier";
textureFileFront[0] = "furnacefrontOff.png";
textureFileBack[0] = "furnaceside.png";
textureFileSides[0] = "furnaceside.png";
onActivated[0] = "player.openGui('InfiniXtrimulatorGUI', position); result = true;";
hasTileEntity[0] = true;
tileEntity[0] = "InfiniXilifierTE";

hardness[1] = 50.0;
resistance[1] = 22.0;
drop[1] = "BanjoPackAlpha:InfiniXilifier";
textureFileFront[1] = "furnacefrontOn5.png";
textureFileBack[1] = "furnaceside.png";
textureFileSides[1] = "furnaceside.png";
light[1] = 15;
onActivated[1] = "player.openGui('InfiniXtrimulatorGUI', position); result = true;";
hasTileEntity[1] = true;
tileEntity[1] = "InfiniXilifierTE";