//variables for changing data functions
let loadedData = {}
let raceTraits = {}
let raceProficiencies = {}
let raceAbilityScores = {}
let subRaceTraits = {}
let subRaceProficiencies = {}
let subRaceAbilityScores = {}
let classTraits = {}
let classProficiencies = {}
let backgroundTraits = {}
let backgroundProficiencies = {}

//JSON URLs
const urls = [
	'../capstone/json/01 races.json',
	'../capstone/json/02 classes.json',
	'../capstone/json/03 backgrounds.json'
]

//Fetch function
async function getSRDData() {
	await Promise.all(urls.map(url =>
		fetch(url)
			.then(checkStatus)
			.then(parseJSON)
			.catch(error => console.error('There was a problem loading data.', error))
	))
		.then(data => {
			loadedData = {
				'RacesData': data[0],
				'ClassesData': data[1],
				'BackgroundsData': data[2]
			}

			loadSRD(loadedData)
		})
}

//Helper functions
function checkStatus(response) {
	if (response.ok) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

function parseJSON(response) {
	return response.json()
}

//Object for printing
const characterSheet = {
	hide: document.querySelectorAll('.hideMe'),
	clear: () => {
		document.querySelectorAll('div:not(.racials').forEach(element => {
			element.innerText = ""
		})
		//trigger skills change to update values when ability scores change
		document.querySelectorAll('.skills').forEach(skill => {
			skill.dispatchEvent(new Event('change'))
		})
	},
	print: () => {
		characterSheet.hide.forEach(element => {
			element.style.display = "none"
		})

		document.querySelectorAll('*').forEach(element => {
			element.style.border = "none"
			element.style.overflow = "hidden"
			let style = getComputedStyle(element)
			let left = style.getPropertyValue("left")
			let top = style.getPropertyValue("top")
			let background = style.getPropertyValue("background")
			element.style.left = `${parseInt(left) - 311.5}px`
			element.style.top = `${parseInt(top) - 210}px`
			element.style.background = "none"
		})

		window.print()

		document.querySelectorAll('*').forEach(element => {
			element.style.border = ""
			element.style.left = ""
			element.style.top = ""
			element.style.display = ""
			element.style.overflow = ""
			element.style.background = ""
		})
	}
}

//clear button
document.querySelector('#clearButton').addEventListener('click', () => { characterSheet.clear() })

//print button
document.querySelector('#printButton').addEventListener('click', () => { characterSheet.print() })

//update traits data
function UpdateTraits(traitsUpdating) {

	//set variables for existing data
	let oldTraits = document.querySelector('#traits').value

	//remove no longer relevent data
	if (traitsUpdating.length > 0 && oldTraits.indexOf(traitsUpdating) > -1) {
		oldTraits = oldTraits.replace(traitsUpdating, "")
	}

	//set fields to updated data
	document.querySelector('#traits').value = oldTraits
}

//update proficiencies data
function UpdateProficiencies(proficienciesUpdating) {

	//set variables for existing data
	let oldProficiencies = document.querySelector('#proficiencies').value

	//remove no longer relevent data
	if (proficienciesUpdating.length > 0 && oldProficiencies.indexOf(proficienciesUpdating) > -1) {
		oldProficiencies = oldProficiencies.replace(proficienciesUpdating, "")
	}

	//set fields to updated data
	document.querySelector('#proficiencies').value = oldProficiencies
}

//update traits data
function UpdateAbilities(abilitiesUpdating) {

	//set variables for existing data
	let oldAbilities = document.querySelector('#racialIncreases').innerText

	//remove no longer relevent data
	if (abilitiesUpdating.length > 0 && oldAbilities.indexOf(abilitiesUpdating) > -1) {
		oldAbilities = oldAbilities.replace(abilitiesUpdating, "")
	}

	//set fields to updated data
	document.querySelector('#racialIncreases').innerText = oldAbilities
}

//load race data into form
function loadSRD(data) {
	document.querySelectorAll('.loadData').forEach(element => {

		if (element.id === "SubRace") {

		} else {

			dataLoading = data[element.id + 'Data']
			selectedData = dataLoading[element.id]

			selectedData.forEach(item => {
				let option = document.createElement("option")
				option.text = item.Name
				option.value = item.Name
				document.querySelector(`#${element.id}`).appendChild(option)
			})
		}

		//set up switching function after data loaded
		document.querySelector(`#${element.id}`).addEventListener('change', () => {

			if (element.id === "SubRace") {
				//load race data
				dataLoading = loadedData.RacesData.Races
				//resolve selected race
				let raceSelected = dataLoading.find(item => {
					return item.Name === document.querySelector('#Races').selectedOptions[0].text
				})
				//load subraces
				selectedData = raceSelected.SubRace
			} else {
				//load JSON data
				dataLoading = data[element.id + 'Data']
				selectedData = dataLoading[element.id]
			}

			//remove old data
			switch (element.id) {
				case "Races":
					UpdateTraits(raceTraits)
					UpdateTraits(subRaceTraits)
					UpdateProficiencies(raceProficiencies)
					UpdateProficiencies(subRaceProficiencies)
					UpdateAbilities(raceAbilityScores)
					UpdateAbilities(subRaceAbilityScores)

					//remove subrace choices
					document.querySelectorAll('.subraceChoice').forEach(element => {
						element.remove()
					})
					break
				case "SubRace":
					UpdateTraits(subRaceTraits)
					UpdateProficiencies(subRaceProficiencies)
					UpdateAbilities(subRaceAbilityScores)
					break
				case "Classes":
					UpdateTraits(classTraits)
					UpdateProficiencies(classProficiencies)
					document.querySelectorAll('.SavingThrows').forEach(item => item.checked = false)
					break
				case "Backgrounds":
					UpdateTraits(backgroundTraits)
					UpdateProficiencies(backgroundProficiencies)
					//remove personality trait choices
					document.querySelectorAll('.PersonalityTrait').forEach(element => {
						element.remove()
					})
					break
			}

			//find selected data
			let selected = selectedData.find(item => {
				return item.Name === document.querySelector(`#${element.id}`).selectedOptions[0].text
			})

			//set selected data to fields
			if (selected !== undefined && 'Proficiencies' in selected) {
				document.querySelector('#proficiencies').value += selected.Proficiencies
			}
			if (selected !== undefined && 'Traits' in selected) {
				document.querySelector('#traits').value += selected.Traits
			}
			if (selected !== undefined && 'SubRace' in selected) {

				//create subrace options
				selected.SubRace.forEach(subRace => {
					let option = document.createElement("option")
					option.text = subRace.Name
					option.value = subRace.Name
					option.className = "subraceChoice"
					document.querySelector('#SubRace').appendChild(option)
				})
			}
			if (selected !== undefined && 'Speed' in selected) {
				document.querySelector('#speed').innerText = selected.Speed
			}
			if (selected !== undefined && 'AbilityScoreIncrease' in selected) {
				document.querySelector('#racialIncreases').innerText += selected.AbilityScoreIncrease
			}
			if (selected !== undefined && 'HitDice' in selected) {
				document.querySelector('#HitDice').innerText = selected.HitDice
			}
			if (selected !== undefined && 'SavingThrows' in selected) {
				selected.SavingThrows.forEach(SavingThrow => {
					document.querySelector(`#${SavingThrow}ST`).checked = true
				})

				document.querySelectorAll('.skills').forEach(skill => {
					skill.dispatchEvent(new Event('change'))
				})
			}
			if (selected !== undefined && 'PersonalityTrait' in selected) {
				//create personality trait options
				selected.PersonalityTrait.forEach(PersonalityTrait => {
					let option = document.createElement("option")
					option.text = PersonalityTrait
					option.value = PersonalityTrait
					option.className = "PersonalityTrait"
					document.querySelector('#PersonalityTrait').appendChild(option)
				})
			}
			if (selected !== undefined && 'Ideal' in selected) {
				//create ideal options
				selected.Ideal.forEach(Ideal => {
					let option = document.createElement("option")
					option.text = Ideal
					option.value = Ideal
					option.className = "Ideal"
					document.querySelector('#Ideal').appendChild(option)
				})
			}
			if (selected !== undefined && 'Bond' in selected) {
				//create bond options
				selected.Bond.forEach(Bond => {
					let option = document.createElement("option")
					option.text = Bond
					option.value = Bond
					option.className = "Bond"
					document.querySelector('#Bond').appendChild(option)
				})
			}
			if (selected !== undefined && 'Flaw' in selected) {
				//create flaw options
				selected.Flaw.forEach(Flaw => {
					let option = document.createElement("option")
					option.text = Flaw
					option.value = Flaw
					option.className = "Flaw"
					document.querySelector('#Flaw').appendChild(option)
				})
			}



			//update  variables for switching
			switch (element.id) {
				case "Races":
					if (selected !== undefined && 'Traits' in selected) {
						raceTraits = selected.Traits[0]
					}
					if (selected !== undefined && 'Proficiencies' in selected) {
						raceProficiencies = selected.Proficiencies[0]
					}
					if (selected !== undefined && 'AbilityScoreIncrease' in selected) {
						raceAbilityScores = selected.AbilityScoreIncrease
					}
					break
				case "SubRace":
					if (selected !== undefined && 'Traits' in selected) {
						subRaceTraits = selected.Traits[0]
					}
					if (selected !== undefined && 'Proficiencies' in selected) {
						subRaceProficiencies = selected.Proficiencies[0]
					}
					if (selected !== undefined && 'AbilityScoreIncrease' in selected) {
						subRaceAbilityScores = selected.AbilityScoreIncrease
					}
					break
				case "Classes":
					if (selected !== undefined && 'Traits' in selected) {
						classTraits = selected.Traits[0]
					}
					if (selected !== undefined && 'Proficiencies' in selected) {
						classProficiencies = selected.Proficiencies[0]
					}
					break
				case "Backgrounds":
					if (selected !== undefined && 'Traits' in selected) {
						backgroundTraits = selected.Traits[0]
					}
					if (selected !== undefined && 'Proficiencies' in selected) {
						backgroundProficiencies = selected.Proficiencies[0]
					}
					break
			}
		})
	})
}

//ability score functions
document.querySelectorAll('.abilityScores').forEach(select => {
	select.addEventListener('change', () => {

		//set modifier based on score
		let scoreSelect = event.target.value
		switch (scoreSelect) {
			case "1":
				document.querySelector(`#${event.target.id}Mod`).innerText = '-5'
				break
			case "2":
			case "3":
				document.querySelector(`#${event.target.id}Mod`).innerText = '-4'
				break
			case "4":
			case "5":
				document.querySelector(`#${event.target.id}Mod`).innerText = '-3'
				break
			case "6":
			case "7":
				document.querySelector(`#${event.target.id}Mod`).innerText = '-2'
				break
			case "8":
			case "9":
				document.querySelector(`#${event.target.id}Mod`).innerText = '-1'
				break
			case "10":
			case "11":
				document.querySelector(`#${event.target.id}Mod`).innerText = '0'
				break
			case "12":
			case "13":
				document.querySelector(`#${event.target.id}Mod`).innerText = '+1'
				break
			case "14":
			case "15":
				document.querySelector(`#${event.target.id}Mod`).innerText = '+2'
				break
			case "16":
			case "17":
				document.querySelector(`#${event.target.id}Mod`).innerText = '+3'
				break
			case "18":
			case "19":
				document.querySelector(`#${event.target.id}Mod`).innerText = '+4'
				break
			case "20":
				document.querySelector(`#${event.target.id}Mod`).innerText = '+5'
				break
		}

		//set Initiative when Dexterity changes
		if (event.target.id === "Dexterity") {
			document.querySelector('#Initiative').innerText = document.querySelector('#DexterityMod').innerText
		}

		//set Passive Perception when Wisdom Changes
		if (event.target.id === "Wisdom") {
			document.querySelector('#passivePerception').innerText = parseInt(document.querySelector('#WisdomMod').innerText) + 10
		}

		//trigger skills change to update values when ability scores change
		document.querySelectorAll('.skills').forEach(skill => {
			skill.dispatchEvent(new Event('change'))
		})
	})

})


//skills change functions
document.querySelectorAll('.skills').forEach(select => {
	select.addEventListener('change', () => {
		let skillSelect = event.target.getAttribute('mod')
		let skillValue = document.querySelector(`label[for='${event.target.id}'`)
		if (event.target.checked) {
			skillValue.value = parseInt(document.querySelector(`[id=${skillSelect}Mod`).innerText) + parseInt(document.querySelector('#proficiencyBonus').innerText)
			if (skillValue.value > 0) {
				skillValue.innerText = `+${skillValue.value}`
			} else if (skillValue.value < 0) {
				skillValue.innerText = `-${skillValue.value}`
			} else if (skillValue.value === 0) {
				skillValue.innerText = `${skillValue.value}`
			} else {
				skillValue.innerText = ""
			}
		} else {
			skillValue.innerText = ""
		}
	})
})

//level change functions
document.querySelector('#level').addEventListener('change', () => {
	document.querySelector('#HitDiceNumber').innerText = document.querySelector('#level').value

	//set Proficiency Bonus based on level
	let levelSelect = document.querySelector('#level').value
	switch (levelSelect) {
		case "1":
		case "2":
		case "3":
		case "4":
			document.querySelector('#proficiencyBonus').innerText = '+2'
			break
		case "5":
		case "6":
		case "7":
		case "8":
			document.querySelector('#proficiencyBonus').innerText = '+3'
			break
		case "9":
		case "10":
		case "11":
		case "12":
			document.querySelector('#proficiencyBonus').innerText = '+4'
			break
		case "13":
		case "14":
		case "15":
		case "16":
			document.querySelector('#proficiencyBonus').innerText = '+5'
			break
		case "17":
		case "18":
		case "19":
		case "20":
			document.querySelector('#proficiencyBonus').innerText = '+6'
			break
	}

	//trigger skills change to update skills values when level changes
	document.querySelectorAll('.skills').forEach(skill => {
		skill.dispatchEvent(new Event('change'))
	})
})

function positionElements() {
	document.querySelectorAll('*').forEach(element => {
		let main = document.querySelector('main')
		let mainLeft = main.getBoundingClientRect();
		let style = getComputedStyle(element)
		let left = style.getPropertyValue("left")
		element.style.left = `${parseInt(left) - parseInt(mainLeft.left)}px`
		})
}

positionElements()

//call json data
getSRDData()
