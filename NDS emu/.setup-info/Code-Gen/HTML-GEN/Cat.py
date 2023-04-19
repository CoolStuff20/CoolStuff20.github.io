myfile = open("gen\\filenames.txt", "r")
myline = myfile.readline()
countt = 7000
while myline:
    countt += 1
    myline = myfile.readline()
    myline1 = myline.replace("\n", "")
    with open("gen\gen.txt", "a") as f:
         f.write(f"""<li class="gba-filter-hide"><a href="launchpad.html" class="bar-text" onclick="gameType({countt}); setNameTxt(this);">{myline1}</a></li>\n""") # Default Generation

        # f.write(f"""<a href="launchpad.html" onclick="gameType({countt}); setRecTxt(this);"><li class="item"><h1>{myline1}</h1>\n<p>Tags: #nes #new #Nintendo</p></li></a>\n""") # Use this line for Reccomended/New Additions Section