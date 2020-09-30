const querySelector = (param) => {
	let result = document.querySelector(param)
	return result
}

const queryAll = (param) => {
	let result = document.querySelectorAll(param)
	return result
}

const qS = querySelector
const qA = queryAll


/*setInterval(() => {
		let refTalker = qA('._2et95')
		if (refTalker){			
			selectTheme(darkTheme())
			clearInterval()	
			}
		}, 50)*/

/*document.addEventListener('load', () => {
  	selectTheme(darkTheme)
 })*/


setInterval(() => {
		let ref = qS('._1QUKR')
		if (ref){			
			selectTheme(darkTheme())
			clearInterval()	
			}
		}, 50)





function areaHeaderUser(bgColorHeader){ // Função do Cebeçalho do usuário
 	const header = {}
	header.bgClass = '._1QUKR'
	header.bgColor = bgColorHeader
	header.searchClass = '._3qx7_'

	function setBgColorHeader(){
	 	qS(header.bgClass)
			.style.backgroundColor = header.bgColor
	}

	function setSearchContact(){
		qS(header.searchClass)
			.style.backgroundColor = header.bgColor
	}

	header.setColor = setBgColorHeader
	header.search = setSearchContact

	function headerRend(){
		header.setColor()
		header.search()
	}

	header.render = headerRend

	return header

}

//Função da área dos Contatos
function areaContacts(colorContacts1, colorContacts2, colorContactsBg, colorLastTicked, imgBgContacts, font) {
		let contactsList = {}
			contactsList.bgClass = '._3R02z'
			contactsList.bgContactClass = '.eJ0yJ'
			contactsList.nameClass = '._357i8 span'
			contactsList.colorName = colorContacts1
			contactsList.colorContactsBg = colorContactsBg
			contactsList.font = font
			contactsList.hoursClass = '.m61XR'
			contactsList.colorHours = colorContacts2
			contactsList.lastMsgClass = '._3ko75._5h6Y_._3Whw5'
			contactsList.lastMsgColor = colorContacts2
			contactsList.imgContactClass = '._1BjNO'
			contactsList.lastTickedClass = '.zFnXi'
			contactsList.lastTickedColor = colorLastTicked


		function setBackgroundContacts(){
			qS(contactsList.bgClass)
				.style.backgroundColor = contactsList.colorContactsBg
			qA(contactsList.bgContactClass) 
				.forEach(e => e.style.backgroundImage = 'url('+imgBgContacts+')')
		}

		function setContacts(){
			qA(contactsList.nameClass)
				.forEach(e => {
					e.style.color = contactsList.colorName
					e.style.fontFamily = contactsList.font
			})
		}

		function setHoursContacts(){
			qA(contactsList.hoursClass)
			.forEach(e => e.style.color = contactsList.colorHours)
		}

		function setLastMsg(){
			qA(contactsList.lastMsgClass)
			.forEach(e => e.style.color = contactsList.lastMsgColor)
		}

		function setImgsContacts(){
			qA(contactsList.imgContactClass)
			.forEach(e => e.style.border = "2px solid "+colorContacts1+"")
		}

		function setLastTicked() {
			qA(contactsList.lastTickedClass)
				.forEach(e => e.style.color = contactsList.lastTickedColor)
		}

		contactsList.bg = setBackgroundContacts
		contactsList.contacts = setContacts
		contactsList.hours = setHoursContacts
		contactsList.lastMsg = setLastMsg
		contactsList.imgContacts = setImgsContacts
		contactsList.lastTicked = setLastTicked

		function contactsRender(){
			contactsList.bg()
			contactsList.contacts()
			contactsList.hours()
			contactsList.lastMsg()
			contactsList.imgContacts()
			contactsList.lastTicked()
		}

		contactsList.render = contactsRender

		return contactsList

	}

//função da área de conversa(lado direito)
function areaTalk(fontTalking, colorTalkingBg, colorTalkingName, colorTalkinStatus,
					colorTalkingMsgReaded, colorReceivedMsgBg, imgBgTalker){
		
		const talker = {}
		
		talker.bgColor = colorTalkingBg

		talker.systemFontClass = '._2et95'
		talker.systemFontFamily = fontTalking
		talker.systemFontColor = 'red'

		talker.contactTalkingBgClass = '._1iFv8'
		talker.contactTalkingBgColor = colorTalkingBg
		talker.contactTalkingNameClass = '.DP7CM'
		talker.contactTalkingNameColor = colorTalkingName
		talker.contactTalkingStatusClass = '._2ruUq'
		talker.contactTalkingStatusColor = colorTalkinStatus
		talker.contactTalkingMsgReadedClass = '._3xkAl'
		talker.contactTalkingMsgReadedColor = colorTalkingMsgReaded

		talker.bgImageClass = '._2-aNW'
		talker.bgImage = imgBgTalker
		talker.bgMsgsOpacity = 0.8
		
		talker.sendedMsgsClass = '.message-out ._3sKvP'
		talker.sendedMsgsBgColor = colorTalkingBg
		talker.sendedMsgsFontClass = '.message-out ._3sKvP span'
		talker.sendedMsgsFontColor = colorTalkingName

		talker.receivedMsgsBgClass = '.message-in ._3sKvP'
		talker.receivedMsgsBgColor = colorReceivedMsgBg
		talker.receivedMsgsFontClass = '.message-in ._3sKvP span'
		talker.receivedMsgsFontColor = colorTalkingBg

		talker.inputMsgAreaClass = '._3ee1T'
		talker.inputMsgAreaColor = colorTalkingBg

		talker.linkBoxBgImgClass = '.KMpIY'
		talker.linkBoxBgImgColor = colorTalkingBg
		talker.linkBoxBgTitleClass = '._1Ar0V._1t3gq'
		talker.linkBoxBgTitleColor = colorTalkingBg

		function setSystemFont() {
			qA(talker.systemFontClass)
			.forEach(e => {
				e.style.fontFamily = talker.systemFontFamily
				e.style.color = talker.systemFontColor
			})
		}

		function setContactTalkingName(){
			qS(talker.contactTalkingNameClass).style.color = talker.contactTalkingNameColor
		}

		function setContactTalkingStatus(){
			if(qS(talker.contactTalkingStatusClass)){
				qS(talker.contactTalkingStatusClass).style.color = talker.contactTalkingStatusColor
			}
		}

		function setContactTalkingBg(){
			qS(talker.contactTalkingBgClass)
				.style.backgroundColor = talker.contactTalkingBgColor
		}

		function setContactTalkingMsgReaded(){
			qA(talker.contactTalkingMsgReadedClass)
				.forEach(e=>e.style.color = talker.contactTalkingMsgReadedColor)
		}

		function setInputMsgArea(){
			qS(talker.inputMsgAreaClass)
				.style.backgroundColor = talker.inputMsgAreaColor
		}

		function setlinkBoxBg(){
			document.addEventListener('scroll', () => {
				if(talker.linkBoxBgImgClass){
					qS(talker.linkBoxBgImgClass)
						.style.backgroundColor = talker.linkBoxBgImgColor
					qS(talker.linkBoxBgTitleClass)
						.style.backgroundColor = talker.linkBoxBgTitleColor	
				}
			})	
		}

		function setBgTalkerImg(){
			qS(talker.bgImageClass)
				.style.backgroundImage = 'url('+talker.bgImage+')'
		}

		function setSendedMsgs(){
			qA(talker.sendedMsgsClass)
				.forEach(e => {
					e.style.backgroundColor = talker.sendedMsgsBgColor
					e.style.opacity = talker.bgMsgsOpacity
				})

			qA(talker.sendedMsgsFontClass)
				.forEach(e => e.style.color = talker.sendedMsgsFontColor)
		}

		function setReceivedMsgs(){
			qA(talker.receivedMsgsBgClass)
				.forEach(e => {
					e.style.backgroundColor = talker.receivedMsgsBgColor
					e.style.opacity = talker.bgMsgsOpacity
				})

			qA(talker.receivedMsgsFontClass)
				.forEach(e => e.style.color = talker.receivedMsgsFontColor)
		}

		talker.systemFont = setSystemFont
		talker.bgImg = setBgTalkerImg
		talker.sendedMsgs = setSendedMsgs
		talker.receivedMsgs = setReceivedMsgs
		talker.contactTalkingName = setContactTalkingName
		talker.contactTalkingStatus = setContactTalkingStatus
		talker.contactTalkingBg = setContactTalkingBg
		talker.contactTalkingMsgReaded = setContactTalkingMsgReaded
		talker.inputMsgArea = setInputMsgArea
		talker.linkBoxBg = setlinkBoxBg

		function talkerRend(){
			talker.systemFont()
			talker.sendedMsgs()
			talker.receivedMsgs()
			talker.contactTalkingName()
			talker.contactTalkingStatus()
			talker.contactTalkingBg()
			talker.contactTalkingMsgReaded()
			talker.inputMsgArea()
			talker.linkBoxBg()
			talker.bgImg()
		}

		talker.render = talkerRend

		return talker
	
	}

//thema dark
function darkTheme(){
	const dark = {}
	dark.color1 = 'black'
	dark.colorContacts1 = 'white'
	dark.colorContacts2 = 'lightgrey'
	dark.colorContactsBg = 'darkgrey'
	dark.colorLastTicked = 'lightgrey'
	dark.imgBgContacts = "data:image/jpeg;base64,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"
	
	dark.font = 'Comic Sans MS'
	dark.fontTalking = 'Comic Sans MS'
	dark.colorTalkingBg='black' 
	dark.colorTalkinName='lightgrey' 
	dark.colorTalkinStatus='darkgrey'
	dark.colorTalkinMsgReaded='lightgreen' 
	dark.colorReceivedMsgBg='white'
	dark.imgBgTalker = "https://image.freepik.com/free-photo/dark-wall-texture-slate-background_24972-263.jpg"

	return dark
}

function setTheme(color1, colorContacts1, colorContacts2, colorContactsBg, colorLastTicked, imgBgContacts, font, fontTalking, colorTalkingBg, colorTalkinName, colorTalkinStatus, colorTalkinMsgReaded, colorReceivedMsgBg, imgBgTalker){
	theme = {}
		theme.header = areaHeaderUser(color1)
		theme.contacts = areaContacts(colorContacts1, colorContacts2, colorContactsBg, colorLastTicked, 									imgBgContacts, font)
		theme.talker = areaTalk(fontTalking, colorTalkingBg, colorTalkinName, colorTalkinStatus, 									colorTalkinMsgReaded, colorReceivedMsgBg, imgBgTalker)

	function themeRend(){
		theme.header.render()
		theme.contacts.render()

		qA('.eJ0yJ').forEach(e => e.addEventListener('click', theme.talker.render))
		
	}
	
	theme.render = themeRend

	return theme.render()
}

function selectTheme(theme){
	return setTheme(
		theme.color1, 
		theme.colorContacts1, 
		theme.colorContacts2, 
		theme.colorContactsBg,
		theme.colorLastTicked, 
		theme.imgBgContacts,
		theme.font,
		theme.fontTalking, 
		theme.colorTalkingBg, 
		theme.colorTalkinName, 
		theme.colorTalkinStatus, 
		theme.colorTalkinMsgReaded,
		theme.colorReceivedMsgBg, 
		theme.imgBgTalker
		)
}



/*function userTheme(){
	document.querySelectorAll('button').addEventListener('click', e => {
		let choice = e.attributes['id']
		if (id === "dark"){
			selected(darkTheme)
		}
	})
}*/



//imagem da index, onde deve ser colocada minha logo para todas os themas iniciais
//document.querySelector('[data-asset-intro-image-light]').style.backgroundImage = 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/0fcc0ef0-f69f-46a4-a2c5-905eeb982da9/2e4dfac7-b834-4ce7-a100-b1ff9a4424c0_rwc_22x0x1331x228x4096.png?h=20ff226e79ee297d2e1146d705e4f160'


