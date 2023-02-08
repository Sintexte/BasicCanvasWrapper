#used to generate sections for a better looking code, DEV ONLY nothing todo with the base code
#TODO copy automaticaly and no print mode
totalsize = 50
specialCharacter = '-'
_withJSComment = True

#CHANGE THIS --> 1 for text, anything else (0) is without text
_DEBUG = 1
#CHANGE THIS --> text
text = "imports"

def generateWithTest(totalsize, text, specialCharacter):
    totalsize -= len(text)
    halfsize = round(totalsize / 2)
    result = (specialCharacter*halfsize)+text+(specialCharacter*halfsize)
    if(_withJSComment): result = "//"+result

    print(result)

def generateEmpty(totalsize, specialCharacter):
    halfsize = round(totalsize / 2)
    result = (specialCharacter*halfsize)*2
    if(_withJSComment): result = "//"+result

    print(result)

if(_DEBUG == 1):
    generateWithTest(totalsize, text, specialCharacter)
else:
    generateEmpty(totalsize, specialCharacter)