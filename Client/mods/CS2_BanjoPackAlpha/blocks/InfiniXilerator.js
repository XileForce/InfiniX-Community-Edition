name = "InfiniXilerator";
creativeTab = "decorations";
material = "iron";


addToCreative[0] = true;
hardness[0] = 50000.0;
resistance[0] = 250.0;
textureFileFront[0] = "offx.png";
textureFileBack[0] = "offx.png";
textureFileSides[0] = "offx.png";
onActivated[0] = "player.openGui('InfiniXileratorGUI', position); result = true;";
hasTileEntity[0] = true;
tileEntity[0] = "InfiniXtractorTE";

hardness[1] = 100000000.0;
resistance[1] = 150000000.0;
textureFileFront[1] = "onx.png";
textureFileBack[1] = "onx.png";
textureFileSides[1] = "onx.png";
light[1] = 15;
onActivated[1] = "player.openGui('InfiniXileratorGUI', position); result = true;";
hasTileEntity[1] = true;
tileEntity[1] = "InfiniXileratorTE";