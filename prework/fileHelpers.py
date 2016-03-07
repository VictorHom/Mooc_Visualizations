
import os
import shutil
src = "/Users/VictorHom/Documents/Fullstack/FS Activities/educationAnalysis/";
dest = src + "data/"
# listOfFolders = os.listdir(src);
# for file in listOfFolders:
# 	print file
# 	if file.startswith('cleanDataArray'):
# 	    shutil.move(os.path.join(src, file), dest);

def line_prepender(filename, line):
    with open(filename, 'r+') as f:
        content = f.read()
        f.seek(0, 0)
        f.write(line + content);

# append "module.exports=" to beginning of each
filesToChange = os.listdir(dest);
for file in filesToChange:
	line_prepender(dest + file, "module.exports=");
