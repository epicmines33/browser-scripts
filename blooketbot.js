if (typeof scriptKey === "undefined") {
  alert("please run the latest version of the script from the discord")
  window.location.reload(true)
}
if (scriptKey !== "gfdogfon54egdf15345454353/[435;]34") {
  alert("please run the latest version of the script from the discord")
  window.location.reload(true)
}
if (typeof antiCheatMaxAmount === "undefined") {
  var antiCheatMaxAmount = 20000000
}
const pageLoadTime = Date.now()
const maxGameTimeSettingMultiplied = window.maxGameTimeSetting * 1000
endGameTimer = 20
viewReportFixTimer = 0

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

async function maxGameTime() {
  console.log(`[BLOOKET-BOT] (DEBUG) game time: ${Date.now() - pageLoadTime}`)
  if (Date.now() - pageLoadTime > maxGameTimeSettingMultiplied) {
    document.querySelector("#app").innerHTML = "[BLOOKET-BOT] game exceeded max game time, ending game"
    await delay(15000)
    newGame()
    return
  }
  await delay(2000)
  maxGameTime()
}
maxGameTime()

async function antiCheat() {
  console.log("running anticheat")
  // gold quest
  if (document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(1) > div > div.styles__goldContainer___1gmuB-camelCase > div") && document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(2) > div > div.styles__goldContainer___1gmuB-camelCase > div") && document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(3) > div > div.styles__goldContainer___1gmuB-camelCase > div")) {
    amountOfGold = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(1) > div > div.styles__goldContainer___1gmuB-camelCase > div").innerText
    amountOfGoldTwo = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(2) > div > div.styles__goldContainer___1gmuB-camelCase > div").innerText
    if (amountOfGold.endsWith("T")) {amountOfGold = amountOfGold.replace("T", "000000000000")}
    if (amountOfGold.endsWith("B")) {amountOfGold = amountOfGold.replace("B", "000000000")}
    if (amountOfGold.endsWith("M")) {amountOfGold = amountOfGold.replace("M", "000000")}
    if (amountOfGold.endsWith("K")) {amountOfGold = amountOfGold.replace("K", "000")}
    if (amountOfGold.startsWith("0.")) {amountOfGold = amountOfGold.slice(2, -1)}
    if (amountOfGold.includes(",")) {amountOfGold = amountOfGold.replace(",", "")}
    if (amountOfGoldTwo.endsWith("T")) {amountOfGoldTwo = amountOfGoldTwo.replace("T", "000000000000")}
    if (amountOfGoldTwo.endsWith("B")) {amountOfGoldTwo = amountOfGoldTwo.replace("B", "000000000")}
    if (amountOfGoldTwo.endsWith("M")) {amountOfGoldTwo = amountOfGoldTwo.replace("M", "000000")}
    if (amountOfGoldTwo.endsWith("K")) {amountOfGoldTwo = amountOfGoldTwo.replace("K", "000")}
    if (amountOfGoldTwo.startsWith("0.")) {amountOfGoldTwo = amountOfGoldTwo.slice(2, -1)}
    if (amountOfGoldTwo.includes(",")) {amountOfGoldTwo = amountOfGoldTwo.replace(",", "")}
    console.log(amountOfGold)
    console.log(amountOfGoldTwo)
    console.log(Number(amountOfGold) * 5)
    if (Number(amountOfGold) > Number(amountOfGoldTwo) * 5) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(1) > div > div.styles__goldContainer___1gmuB-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (Number(amountOfGold) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(1) > div > div.styles__goldContainer___1gmuB-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (amountOfGold.includes("undefined") || amountOfGold.includes("e") || amountOfGold.includes("NaN")) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___DzrPr-camelCase.styles__invisibleScrollbar___1InPK-camelCase > div:nth-child(1) > div > div.styles__goldContainer___1gmuB-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  // fish frenzy
  if (document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___3leSv-camelCase.styles__invisibleScrollbar___3bIcM-camelCase > div:nth-child(1) > div > div.styles__weightText___cCFRz-camelCase")) {
    amountofFish = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___3leSv-camelCase.styles__invisibleScrollbar___3bIcM-camelCase > div:nth-child(1) > div > div.styles__weightText___cCFRz-camelCase").innerText
    amountofFish = amountofFish.slice(0, -4)
    if (amountofFish.endsWith("T")) {amountofFish = amountofFish.replace("T", "000000000000")}
    if (amountofFish.endsWith("B")) {amountofFish = amountofFish.replace("B", "000000000")}
    if (amountofFish.endsWith("M")) {amountofFish = amountofFish.replace("M", "000000")}
    if (amountofFish.endsWith("K")) {amountofFish = amountofFish.replace("K", "000")}
    if (amountofFish.startsWith("0.")) {amountofFish = amountofFish.slice(2, -1)}
    if (amountofFish.includes(",")) {amountofFish = amountofFish.replace(",", "")}
    if (Number(amountofFish) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___3leSv-camelCase.styles__invisibleScrollbar___3bIcM-camelCase > div:nth-child(1) > div > div.styles__weightText___cCFRz-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (amountofFish.includes("undefined") || amountofFish.includes("e") || amountofFish.includes("NaN")) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___3leSv-camelCase.styles__invisibleScrollbar___3bIcM-camelCase > div:nth-child(1) > div > div.styles__weightText___cCFRz-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  // crypto hack
  if (document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase.styles__body___2iGf_-camelCase > div.styles__left___2an6n-camelCase.styles__invisibleScrollbar___DmgFA-camelCase > div:nth-child(1) > div.styles__cryptoContainer___kI8R5-camelCase > div")) {
    AmountOfCrpyto = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase.styles__body___2iGf_-camelCase > div.styles__left___2an6n-camelCase.styles__invisibleScrollbar___DmgFA-camelCase > div:nth-child(1) > div.styles__cryptoContainer___kI8R5-camelCase > div").innerText
    if (AmountOfCrpyto.endsWith("T")) {AmountOfCrpyto = AmountOfCrpyto.replace("T", "000000000000")}
    if (AmountOfCrpyto.endsWith("B")) {AmountOfCrpyto = AmountOfCrpyto.replace("B", "000000000")}
    if (AmountOfCrpyto.endsWith("M")) {AmountOfCrpyto = AmountOfCrpyto.replace("M", "000000")}
    if (AmountOfCrpyto.endsWith("K")) {AmountOfCrpyto = AmountOfCrpyto.replace("K", "000")}
    if (AmountOfCrpyto.startsWith("0.")) {AmountOfCrpyto = AmountOfCrpyto.slice(2, -1)}
    if (AmountOfCrpyto.includes(",")) {AmountOfCrpyto = AmountOfCrpyto.replace(",", "")}
    console.log(AmountOfCrpyto)
    if (Number(AmountOfCrpyto) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase.styles__body___2iGf_-camelCase > div.styles__left___2an6n-camelCase.styles__invisibleScrollbar___DmgFA-camelCase > div:nth-child(1) > div.styles__cryptoContainer___kI8R5-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (AmountOfCrpyto.includes("undefined") || AmountOfCrpyto.includes("e") || AmountOfCrpyto.includes("NaN")) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase.styles__body___2iGf_-camelCase > div.styles__left___2an6n-camelCase.styles__invisibleScrollbar___DmgFA-camelCase > div:nth-child(1) > div.styles__cryptoContainer___kI8R5-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  // tower defence
  if (document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__playersContainer___2t3b5-camelCase > div:nth-child(1) > div.styles__dmgContainer___1KBlH-camelCase > div")) {
    amountOfDamage = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__playersContainer___2t3b5-camelCase > div:nth-child(1) > div.styles__dmgContainer___1KBlH-camelCase > div").innerText
    if (amountOfDamage.endsWith("T")) {amountOfDamage = amountOfDamage.replace("T", "000000000000")}
    if (amountOfDamage.endsWith("B")) {amountOfDamage = amountOfDamage.replace("B", "000000000")}
    if (amountOfDamage.endsWith("M")) {amountOfDamage = amountOfDamage.replace("M", "000000")}
    if (amountOfDamage.endsWith("K")) {amountOfDamage = amountOfDamage.replace("K", "000")}
    if (amountOfDamage.startsWith("0.")) {amountOfDamage = amountOfDamage.slice(2, -1)}
    if (amountOfDamage.includes(",")) {amountOfDamage = amountOfDamage.replace(",", "")}
    if (Number(amountOfDamage) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__playersContainer___2t3b5-camelCase > div:nth-child(1) > div.styles__dmgContainer___1KBlH-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (amountOfDamage.includes("undefined") || amountOfDamage.includes("e") || amountOfDamage.includes("NaN")) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__playersContainer___2t3b5-camelCase > div:nth-child(1) > div.styles__dmgContainer___1KBlH-camelCase > div").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  // cafe
  if (document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___lU2bM-camelCase.styles__invisibleScrollbar___38eun-camelCase > div:nth-child(1) > div.styles__cashText___1-X1n-camelCase")) {
    amountOfCashCafe = document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___lU2bM-camelCase.styles__invisibleScrollbar___38eun-camelCase > div:nth-child(1) > div.styles__cashText___1-X1n-camelCase").innerText
    amountOfCashCafe = amountOfCashCafe.slice(1)
    if (amountOfCashCafe.endsWith("T")) {amountOfCashCafe = amountOfCashCafe.replace("T", "000000000000")}
    if (amountOfCashCafe.endsWith("B")) {amountOfCashCafe = amountOfCashCafe.replace("B", "000000000")}
    if (amountOfCashCafe.endsWith("M")) {amountOfCashCafe = amountOfCashCafe.replace("M", "000000")}
    if (amountOfCashCafe.endsWith("K")) {amountOfCashCafe = amountOfCashCafe.replace("K", "000")}
    if (amountOfCashCafe.startsWith("0.")) {amountOfCashCafe = amountOfCashCafe.slice(2, -1)}
    if (amountOfCashCafe.includes(",")) {amountOfCashCafe = amountOfCashCafe.replace(",", "")}
    if (Number(amountOfCashCafe) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___lU2bM-camelCase.styles__invisibleScrollbar___38eun-camelCase > div:nth-child(1) > div.styles__cashText___1-X1n-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (amountOfCashCafe.includes("undefined") || amountOfCashCafe.includes("e") || amountOfCashCafe.includes("NaN")) {
      document.querySelector("#app > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___lU2bM-camelCase.styles__invisibleScrollbar___38eun-camelCase > div:nth-child(1) > div.styles__cashText___1-X1n-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  // factory
  if (document.querySelector("#app > div > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___1l2mJ-camelCase.styles__invisibleScrollbar___2zlCq-camelCase > div:nth-child(1) > div.styles__cashText___1058H-camelCase")) {
    amountOfCashFactory = document.querySelector("#app > div > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___1l2mJ-camelCase.styles__invisibleScrollbar___2zlCq-camelCase > div:nth-child(1) > div.styles__cashText___1058H-camelCase").innerText
    amountOfCashFactory = amountOfCashFactory.slice(1)
    if (amountOfCashFactory.endsWith("T")) {amountOfCashFactory = amountOfCashFactory.replace("T", "000000000000")}
    if (amountOfCashFactory.endsWith("B")) {amountOfCashFactory = amountOfCashFactory.replace("B", "000000000")}
    if (amountOfCashFactory.endsWith("M")) {amountOfCashFactory = amountOfCashFactory.replace("M", "000000")}
    if (amountOfCashFactory.endsWith("K")) {amountOfCashFactory = amountOfCashFactory.replace("K", "000")}
    if (amountOfCashFactory.startsWith("0.")) {amountOfCashFactory = amountOfCashFactory.slice(2, -1)}
    if (amountOfCashFactory.includes(",")) {amountOfCashFactory = amountOfCashFactory.replace(",", "")}
    if (Number(amountOfCashFactory) > antiCheatMaxAmount) {
      document.querySelector("#app > div > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___1l2mJ-camelCase.styles__invisibleScrollbar___2zlCq-camelCase > div:nth-child(1) > div.styles__cashText___1058H-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
    if (amountOfCashFactory.includes("undefined") || amountOfCashFactory.includes("e") || amountOfCashFactory.includes("NaN")) {
      document.querySelector("#app > div > div > div > div.arts__hostRegularBody___2vxp7-camelCase > div.styles__left___1l2mJ-camelCase.styles__invisibleScrollbar___2zlCq-camelCase > div:nth-child(1) > div.styles__cashText___1058H-camelCase").click()
      setTimeout(() => {document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()}, 1000);
    }
  }
  await delay(500)
  antiCheat()
}
antiCheat()

async function gameLoad() {
  if (window.gamemode === "Random") {
    console.log("[BLOOKET-BOT] - random mode enabled, selecting gamemode..")
    var randomListArray = randomList.split(',')
    window.gamemode = "Gold Quest"
    //window.gamemode = randomListArray[Math.floor(Math.random() * randomListArray.length)];
  }
  var gameModeList = "Gold Quest,Fishing Frenzy,Crypto Hack,Tower Defence,Café,Battle Royale,Factory,Racing,Crazy Kingdom,Tower of Doom,Classic"
  var gameModeListArray = gameModeList.split(',')
  var gameModeListArrayLength = gameModeListArray.length
  for (var i = 0; i < gameModeListArrayLength; i++) {
    if (gameModeListArray[i] === window.gamemode) {
      window.gamemodeID = i + 1
      console.log(`[BLOOKET-BOT] - set gamemode to ${gameModeListArray[i]} (${window.gamemodeID})`)
      checkForButtons()
      return
    }
  }
}

async function checkForButtons() {
  if (document.querySelector("#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__infoContainer___2jQqZ-camelCase > div > div.styles__playButtonContainer___3wt_z-camelCase > div")) {
    if (document.querySelector("#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__infoContainer___2jQqZ-camelCase > div > div.styles__playButtonContainer___3wt_z-camelCase > div").innerHTML === "HW") {
      clickButton("#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__infoContainer___2jQqZ-camelCase > div > div.styles__playButtonContainer___3wt_z-camelCase > div:nth-child(2)", 5, "Host")
    } else {
      clickButton("#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__infoContainer___2jQqZ-camelCase > div > div.styles__playButtonContainer___3wt_z-camelCase > div", 5, "Host Game")
    }
    return
  }
  if (document.querySelector(`#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__modesArray___1LrKw-camelCase > div:nth-child(${window.gamemodeID}) > div`)) {
    clickButton(`#app > div > div > div.styles__bigScreen___Epsuv-camelCase > div.styles__modesArray___1LrKw-camelCase > div:nth-child(${window.gamemodeID}) > div`, 5, window.gamemode)
    return
  }
  if (document.querySelector("#app > div > div > div.styles__center___1d8bK-camelCase.styles__bigScreen___3GK7Y-camelCase > div.styles__mainContainer___1EOxl-camelCase > div.styles__hostButton___DY--W-camelCase > div")) {
    clickButton("#app > div > div > div.styles__center___1d8bK-camelCase.styles__bigScreen___3GK7Y-camelCase > div.styles__mainContainer___1EOxl-camelCase > div.styles__hostButton___DY--W-camelCase > div", 30, "Host Now")
    return
  }
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__startButton___2WtSt-camelCase > div > div")) {
    clickButton("#app > div > div > div:nth-child(2) > div > div.styles__startButton___2WtSt-camelCase > div > div", 60, "Start")
    return
  }
  if (document.querySelector("#app > div > div > div > div.styles__header___3dDgT-camelCase > a")) {
    clickButton("#app > div > div > div > div.styles__header___3dDgT-camelCase > a", 60, "View Report")
    return
  }
  if (document.querySelector("#app > div > div > div.arts__regularBodyMax___1p9Vu-camelCase > div > div.styles__row___BBhd9-camelCase > div:nth-child(2) > div.styles__deleteButton___X_KNQ-camelCase")) {
    await delay(1000)
    document.querySelector("#app > div > div > div.arts__regularBodyMax___1p9Vu-camelCase > div > div.styles__row___BBhd9-camelCase > div:nth-child(2) > div.styles__deleteButton___X_KNQ-camelCase").click()
    await delay(1000)
    document.querySelector("#app > div > div > div.arts__modal___12Klt-camelCase > form > div.styles__holder___2_DOS-camelCase > div > div.styles__button___UQkJ3-camelCase.styles__hoverRed___P-h9Q-camelCase").click()
    await delay(3000)
    newGame()
    return
  }
  if (document.querySelector("#app > div > div > div:nth-child(1) > div.arts__hostRegularBody___2vxp7-camelCase > a")) {
    viewReportFixTimer = viewReportFixTimer + 1
    if (viewReportFixTimer > 100) {
      document.querySelector("#app").innerHTML = "[BLOOKET-BOT] detected game error.. loading new game"
      await delay(10000)
      newGame()
      return
    }
  }
  await delay(500)
  checkForButtons()
}

async function clickButton(buttonID, buttonTime, buttonName) {
  if (document.querySelector(buttonID) === null) {
    checkForButtons()
    return
  }
  document.querySelector(buttonID).innerHTML = `${buttonName}-${buttonTime}`
  buttonTime = buttonTime - 1
  if (buttonTime < 0) {
    document.querySelector(buttonID).click()
    checkForButtons()
    return
  } else {
    await delay(1000)
    clickButton(buttonID, buttonTime, buttonName)
  }
}

async function newGame() {
  document.querySelector("#app").innerHTML   = `                                                                                                                                                             \
  <div id="selfPromo">                                                                                                                                                                                        \                                                                                                                                                                                                \
    <p><b><u><font size="10" color="#FFA500">blooket Bot</p></b></u></font>                                                                                                                                                    \                                                                                                                                                                                               \
    <p><font size="6" color="#AAAAAA">thank you for playing! this game was ran by blooket bot made by epicmines33, please report any issues found to the socials below</p></font>                                                                      \
    <p>⠀</p>                                                                                                                                                                                                  \                                                                                                                                                                                                 \                                                                                                                                                                                                \
    <p><b><u><font size="6" color="#FFA500">Socials</p></b></u></font>                                                                                                                                                        \                                                                                                                                                                                              \
    <p><font size="5" color="#AA00AA"><b>discord</b></font></p>                                                                                                                                                              \
    <p><font size="4" color="#AAAAAA">epicmines33#6969</font></p>                                                                                                                                                             \                                                                                                                                                                                      \
    <p><font size="5" color="#AA00AA"><b>script download</b></font></p>                                                                                                                                                       \
    <p><font size="4" color="#AAAAAA">discord.gg/MMDdA2vZxf</font></p>                                                                                                                                                        \
    <p>⠀</p>                                                                                                                                                                                                  \                                                                                                                                                                                                 \                                                                                                                                                                                               \
    <p><b><font size="10" color="#FFA500">Loading new game in ${endGameTimer} secs..</p></b></font> \
  </div>                                                                                                                                                                                                      \
  `
  endGameTimer = endGameTimer - 1
  await delay(1000)
  if (endGameTimer < 1) {
    newGameLoad()
  } else {
    newGame()
  }
}

async function newGameLoad() {
  document.querySelector("#app").innerHTML   = `                                                                                                                                                             \
  <div id="selfPromo">                                                                                                                                                                                        \                                                                                                                                                                                                \
    <p><b><u><font size="10" color="#FFA500">blooket Bot</p></b></u></font>                                                                                                                                                    \                                                                                                                                                                                               \
    <p><font size="6" color="#AAAAAA">thank you for playing! this game was ran by blooket bot made by epicmines33, please report any issues found to the socials below</p></font>                                                                      \
    <p>⠀</p>                                                                                                                                                                                                  \                                                                                                                                                                                                 \                                                                                                                                                                                                \
    <p><b><u><font size="6" color="#FFA500">Socials</p></b></u></font>                                                                                                                                                        \                                                                                                                                                                                              \
    <p><font size="5" color="#AA00AA"><b>discord</b></font></p>                                                                                                                                                              \
    <p><font size="4" color="#AAAAAA">epicmines33#6969</font></p>                                                                                                                                                             \                                                                                                                                                                                      \
    <p><font size="5" color="#AA00AA"><b>script download</b></font></p>                                                                                                                                                       \
    <p><font size="4" color="#AAAAAA">discord.gg/MMDdA2vZxf</font></p>                                                                                                                                                        \
    <p>⠀</p>                                                                                                                                                                                                  \                                                                                                                                                                                                 \                                                                                                                                                                                               \
    <p><b><font size="10" color="#FFA500">Loading new game now..</p></b></font> \
  </div>                                                                                                                                                                                                      \
  `
  await delay(2000)
  var quizlist = quizUrls.split(',')
  var nextQuiz = quizlist[Math.floor(Math.random() * quizlist.length)];
  window.location.replace(`https://www.blooket.com/host?id=${nextQuiz}`)
}
gameLoad()
