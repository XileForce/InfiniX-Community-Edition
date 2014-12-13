name = "InfiniXpulsorator";
creativeTab = "decorations";
material = "iron";

addToCreative[0] = true;
hardness[0] = 150.0;
resistance[0] = 65.0;
textureFileFront[0] = "furnacefrontOff.png";
textureFileBack[0] = "furnaceside.png";
textureFileSides[0] = "furnaceside.png";
onActivated[0] = "player.openGui('InfiniXpulsoratorGUI', position); result = true;";
hasTileEntity[0] = true;
tileEntity[0] = "InfiniXpulsoratorTE";

hardness[1] = 5000.0;
resistance[1] = 550.0;
textureFileFront[1] = "furnacefrontOn2.png";
textureFileBack[1] = "furnaceside.png";
textureFileSides[1] = "furnaceside.png";
light[1] = 15;
onActivated[1] = "player.openGui('InfiniXpulsoratorGUI', position); result = true;";
hasTileEntity[1] = true;
tileEntity[1] = "InfiniXpulsoratorTE";