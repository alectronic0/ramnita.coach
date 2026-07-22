// Raminta Coaching — Calorie & Macro Calculator Logic

document.addEventListener('DOMContentLoaded', () => {
  const calcLayout = document.querySelector('.calculator-layout');
  const form = document.getElementById('calorie-form');
  const resultsContainer = document.getElementById('calculator-results');
  const resultsPrompt = resultsContainer.querySelector('.results-prompt');
  const resultsContent = resultsContainer.querySelector('.results-content');

  // Input elements
  const genderToggles = document.getElementsByName('gender');
  const heightUnitToggles = document.getElementsByName('heightUnits');
  const weightUnitToggles = document.getElementsByName('weightUnits');
  const ageInput = document.getElementById('calc-age');
  const activitySelect = document.getElementById('calc-activity');

  // Height Inputs
  const heightCmInput = document.getElementById('calc-height');
  const heightFtInput = document.getElementById('calc-height-ft');
  const heightInInput = document.getElementById('calc-height-in');

  // Weight Inputs
  const weightKgInput = document.getElementById('calc-weight');
  const weightStInput = document.getElementById('calc-weight-st');
  const weightStLbsInput = document.getElementById('calc-weight-st-lbs');
  const weightLbsInput = document.getElementById('calc-weight-lbs');

  // Target Weight Inputs
  const targetWeightKgInput = document.getElementById('calc-target-weight');
  const targetWeightStInput = document.getElementById('calc-target-weight-st');
  const targetWeightStLbsInput = document.getElementById('calc-target-weight-st-lbs');
  const targetWeightLbsInput = document.getElementById('calc-target-weight-lbs');

  // Results displays
  const tdeeDisplay = document.getElementById('results-tdee');
  const safetyWarning = document.getElementById('safety-warning');
  const safetyLimitDisplay = document.getElementById('safety-limit');
  const activeCaloriesDisplay = document.getElementById('active-deficit-calories');

  // Target weight progress graph selectors
  const progressSection = document.getElementById('weight-progress-section');
  const progressDuration = document.getElementById('weight-loss-duration');
  const progressStartVal = document.getElementById('weight-start-val');
  const progressTargetVal = document.getElementById('weight-target-val');
  const progressLossTotal = document.getElementById('weight-loss-total');
  const progressFill = document.querySelector('.weight-progress-fill');
  const progressFlag = document.querySelector('.weight-progress-flag');

  // Deficit tab buttons
  const deficitTabs = document.querySelectorAll('.deficit-tab');

  // Action buttons
  const clearBtn = document.getElementById('calc-clear-btn');

  // Macro displays
  const proteinVal = document.getElementById('macro-protein');
  const fatVal = document.getElementById('macro-fat');
  const carbVal = document.getElementById('macro-carb');

  const proteinBar = document.querySelector('.bar-protein');
  const fatBar = document.querySelector('.bar-fat');
  const carbBar = document.querySelector('.bar-carb');

  // Calculation variables
  let currentBmr = 0;
  let currentTdee = 0;
  let activeDeficitValue = 500; // default standard deficit

  // Keep track of unit modes for dynamic conversion on toggle
  let activeHeightUnit = null;
  let activeWeightUnit = null;

  // Toggle Height Units (cm vs. ft/in)
  heightUnitToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const newUnit = e.target.value;
      if (newUnit === activeHeightUnit) return;
      
      const isFt = newUnit === 'ft';
      
      // Convert height values if there is a previous active unit
      if (activeHeightUnit !== null) {
        if (isFt) {
          const cmVal = parseFloat(heightCmInput.value);
          if (cmVal && !isNaN(cmVal)) {
            const totalInches = cmVal / 2.54;
            let ft = Math.floor(totalInches / 12);
            let inches = Math.round(totalInches % 12);
            if (inches === 12) {
              ft += 1;
              inches = 0;
            }
            heightFtInput.value = ft;
            heightInInput.value = inches;
          }
        } else {
          const ftVal = parseInt(heightFtInput.value, 10);
          const inVal = parseInt(heightInInput.value, 10) || 0;
          if (ftVal && !isNaN(ftVal)) {
            const cmVal = Math.round((ftVal * 12 + inVal) * 2.54);
            heightCmInput.value = cmVal;
          }
        }
      }
      
      // Update UI classes and required attributes
      if (isFt) {
        calcLayout.classList.add('height-mode-ft');
        calcLayout.classList.remove('height-mode-cm');
        heightCmInput.required = false;
        heightFtInput.required = true;
      } else {
        calcLayout.classList.add('height-mode-cm');
        calcLayout.classList.remove('height-mode-ft');
        heightCmInput.required = true;
        heightFtInput.required = false;
      }
      
      activeHeightUnit = newUnit;
    });
  });

  // Toggle Weight Units (kg vs. st+lbs vs. lbs)
  weightUnitToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const newUnit = e.target.value; // 'kg', 'st', 'lbs'
      if (newUnit === activeWeightUnit) return;
      
      // Convert weight values if there is a previous active unit
      if (activeWeightUnit !== null) {
        // Current Weight
        let currentValInKg = 0;
        if (activeWeightUnit === 'kg') {
          currentValInKg = parseFloat(weightKgInput.value);
        } else if (activeWeightUnit === 'lbs') {
          const lbsVal = parseFloat(weightLbsInput.value);
          if (lbsVal) currentValInKg = lbsVal * 0.45359237;
        } else if (activeWeightUnit === 'st') {
          const stVal = parseFloat(weightStInput.value);
          const lbsVal = parseFloat(weightStLbsInput.value) || 0;
          if (stVal) currentValInKg = (stVal * 14 + lbsVal) * 0.45359237;
        }
        
        if (currentValInKg && !isNaN(currentValInKg)) {
          if (newUnit === 'kg') {
            weightKgInput.value = Math.round(currentValInKg);
          } else if (newUnit === 'lbs') {
            weightLbsInput.value = Math.round(currentValInKg / 0.45359237);
          } else if (newUnit === 'st') {
            const totalLbs = currentValInKg / 0.45359237;
            let st = Math.floor(totalLbs / 14);
            let lbs = Math.round(totalLbs % 14);
            if (lbs === 14) {
              st += 1;
              lbs = 0;
            }
            weightStInput.value = st;
            weightStLbsInput.value = lbs;
          }
        }

        // Target Weight
        let targetValInKg = 0;
        if (activeWeightUnit === 'kg') {
          targetValInKg = parseFloat(targetWeightKgInput.value);
        } else if (activeWeightUnit === 'lbs') {
          const lbsVal = parseFloat(targetWeightLbsInput.value);
          if (lbsVal) targetValInKg = lbsVal * 0.45359237;
        } else if (activeWeightUnit === 'st') {
          const stVal = parseFloat(targetWeightStInput.value);
          const lbsVal = parseFloat(targetWeightStLbsInput.value) || 0;
          if (stVal) targetValInKg = (stVal * 14 + lbsVal) * 0.45359237;
        }
        
        if (targetValInKg && !isNaN(targetValInKg)) {
          if (newUnit === 'kg') {
            targetWeightKgInput.value = Math.round(targetValInKg);
          } else if (newUnit === 'lbs') {
            targetWeightLbsInput.value = Math.round(targetValInKg / 0.45359237);
          } else if (newUnit === 'st') {
            const totalLbs = targetValInKg / 0.45359237;
            let st = Math.floor(totalLbs / 14);
            let lbs = Math.round(totalLbs % 14);
            if (lbs === 14) {
              st += 1;
              lbs = 0;
            }
            targetWeightStInput.value = st;
            targetWeightStLbsInput.value = lbs;
          }
        }
      }
      
      // Update UI classes and required attributes
      calcLayout.classList.remove('weight-mode-kg', 'weight-mode-st', 'weight-mode-lbs');
      calcLayout.classList.add(`weight-mode-${newUnit}`);
      
      weightKgInput.required = (newUnit === 'kg');
      weightStInput.required = (newUnit === 'st');
      weightLbsInput.required = (newUnit === 'lbs');
      
      activeWeightUnit = newUnit;
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Retrieve input values
    const age = parseInt(ageInput.value, 10);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const heightUnit = document.querySelector('input[name="heightUnits"]:checked').value;
    const weightUnit = document.querySelector('input[name="weightUnits"]:checked').value;
    const activityMultiplier = parseFloat(activitySelect.value);

    let weightKg = 0;
    let heightCm = 0;

    // Convert Height to cm
    if (heightUnit === 'ft') {
      const ft = parseInt(heightFtInput.value, 10);
      const inches = parseInt(heightInInput.value, 10) || 0;
      heightCm = (ft * 12 + inches) * 2.54;
    } else {
      heightCm = parseFloat(heightCmInput.value);
    }

    // Convert Weight to kg
    if (weightUnit === 'lbs') {
      const lbs = parseFloat(weightLbsInput.value);
      weightKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(weightStInput.value);
      const lbs = parseFloat(weightStLbsInput.value) || 0;
      weightKg = (st * 14 + lbs) * 0.45359237;
    } else {
      weightKg = parseFloat(weightKgInput.value);
    }

    // Calculate BMR (Mifflin-St Jeor)
    if (gender === 'male') {
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else if (gender === 'female') {
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    } else {
      // Other: Average of male (+5) and female (-161) offset constants => -78
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 78;
    }

    // Calculate TDEE
    currentTdee = currentBmr * activityMultiplier;

    // Display TDEE
    tdeeDisplay.textContent = `${Math.round(currentTdee).toLocaleString()} kcal`;

    // Show Results Panel
    resultsPrompt.style.display = 'none';
    resultsContent.style.display = 'block';

    // Calculate Deficits and display on tabs
    updateDeficitTabs();

    // Calculate and display active selection details
    calculateActiveGoal();

    // Save inputs to local storage
    saveStateToLocalStorage();
  });

  // Helper to get current and target weights in kg
  function getWeightsInKg() {
    const weightUnit = document.querySelector('input[name="weightUnits"]:checked').value;
    
    let currentKg = 0;
    if (weightUnit === 'kg') {
      currentKg = parseFloat(weightKgInput.value);
    } else if (weightUnit === 'lbs') {
      const lbs = parseFloat(weightLbsInput.value);
      if (lbs) currentKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(weightStInput.value);
      const lbs = parseFloat(weightStLbsInput.value) || 0;
      if (st) currentKg = (st * 14 + lbs) * 0.45359237;
    }

    let targetKg = 0;
    if (weightUnit === 'kg') {
      targetKg = parseFloat(targetWeightKgInput.value);
    } else if (weightUnit === 'lbs') {
      const lbs = parseFloat(targetWeightLbsInput.value);
      if (lbs) targetKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(targetWeightStInput.value);
      const lbs = parseFloat(targetWeightStLbsInput.value) || 0;
      if (st) targetKg = (st * 14 + lbs) * 0.45359237;
    }

    return { currentKg, targetKg, weightUnit };
  }

  // Format weight values cleanly for nodes in the weight loss graph
  function formatWeightForGraph(kgVal, unit) {
    if (unit === 'kg') {
      return Math.round(kgVal) + ' kg';
    } else if (unit === 'lbs') {
      return Math.round(kgVal / 0.45359237) + ' lbs';
    } else { // 'st'
      const totalLbs = kgVal / 0.45359237;
      const st = Math.floor(totalLbs / 14);
      const lbs = Math.round(totalLbs % 14);
      if (st === 0) return lbs + ' lb';
      if (lbs === 0) return st + ' st';
      return `${st} st ${lbs} lb`;
    }
  }

  // Calculate calories and macros for current selection
  function calculateActiveGoal() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const isFemale = gender === 'female';
    const limitFloor = isFemale ? 1200 : 1500; // default for other can also be female limit as baseline

    // Raw calculated target
    let targetCal = currentTdee - activeDeficitValue;
    let isBelowLimit = false;

    if (targetCal < limitFloor) {
      targetCal = limitFloor;
      isBelowLimit = true;
    }

    const roundedCal = Math.round(targetCal);
    activeCaloriesDisplay.textContent = `${roundedCal.toLocaleString()} kcal`;

    // Handle Safety Warning display
    if (isBelowLimit) {
      safetyLimitDisplay.textContent = limitFloor.toString();
      safetyWarning.style.display = 'block';
    } else {
      safetyWarning.style.display = 'none';
    }

    // Calculate and draw target weight progress graph
    const { currentKg, targetKg, weightUnit } = getWeightsInKg();
    if (currentKg && targetKg && targetKg < currentKg) {
      const lossKg = currentKg - targetKg;
      const weeklyRateKg = activeDeficitValue / 1100;
      const weeksNeeded = Math.ceil(lossKg / weeklyRateKg);

      progressStartVal.textContent = formatWeightForGraph(currentKg, weightUnit);
      progressTargetVal.textContent = formatWeightForGraph(targetKg, weightUnit);
      
      if (weightUnit === 'kg') {
        progressLossTotal.textContent = `-${Math.round(lossKg)} kg`;
      } else if (weightUnit === 'lbs') {
        progressLossTotal.textContent = `-${Math.round(lossKg / 0.45359237)} lbs`;
      } else {
        const totalLbs = lossKg / 0.45359237;
        const st = Math.floor(totalLbs / 14);
        const lbs = Math.round(totalLbs % 14);
        if (st === 0) {
          progressLossTotal.textContent = `-${lbs} lb`;
        } else if (lbs === 0) {
          progressLossTotal.textContent = `-${st} st`;
        } else {
          progressLossTotal.textContent = `-${st} st ${lbs} lb`;
        }
      }

      progressDuration.textContent = weeksNeeded === 1 ? '1 week' : `${weeksNeeded} weeks`;

      // Set visually appealing fill percentages (e.g. 60% visually to look like a progress line)
      progressFill.style.width = '60%';
      progressFlag.style.left = '60%';

      progressSection.style.display = 'block';
    } else {
      progressSection.style.display = 'none';
    }

    // Macros math (30% Pro, 30% Fat, 40% Carb split)
    const proteinCal = roundedCal * 0.30;
    const fatCal = roundedCal * 0.30;
    const carbCal = roundedCal * 0.40;

    const proteinG = Math.round(proteinCal / 4);
    const fatG = Math.round(fatCal / 9);
    const carbG = Math.round(carbCal / 4);

    // Update macro values
    proteinVal.textContent = `${proteinG}g`;
    fatVal.textContent = `${fatG}g`;
    carbVal.textContent = `${carbG}g`;

    // Trigger smooth macro bar animation
    setTimeout(() => {
      proteinBar.style.width = '30%';
      fatBar.style.width = '30%';
      carbBar.style.width = '40%';
    }, 50);
  }

  // Update tabs displays based on current calculations
  function updateDeficitTabs() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const isFemale = gender === 'female';
    const limitFloor = isFemale ? 1200 : 1500;

    deficitTabs.forEach(tab => {
      const deficit = parseInt(tab.dataset.deficit, 10);
      let calculatedVal = currentTdee - deficit;

      if (calculatedVal < limitFloor) {
        calculatedVal = limitFloor;
      }

      const displayCal = tab.querySelector('.tab-calories');
      displayCal.textContent = `${Math.round(calculatedVal).toLocaleString()} kcal`;
    });
  }

  // Save to Local Storage helper
  function saveStateToLocalStorage() {
    try {
      const state = {
        gender: document.querySelector('input[name="gender"]:checked').value,
        heightUnit: document.querySelector('input[name="heightUnits"]:checked').value,
        weightUnit: document.querySelector('input[name="weightUnits"]:checked').value,
        age: ageInput.value,
        activity: activitySelect.value,
        heightCm: heightCmInput.value,
        heightFt: heightFtInput.value,
        heightIn: heightInInput.value,
        weightKg: weightKgInput.value,
        weightSt: weightStInput.value,
        weightStLbs: weightStLbsInput.value,
        weightLbs: weightLbsInput.value,
        targetWeightKg: targetWeightKgInput.value,
        targetWeightSt: targetWeightStInput.value,
        targetWeightStLbs: targetWeightStLbsInput.value,
        targetWeightLbs: targetWeightLbsInput.value,
        deficit: activeDeficitValue
      };
      localStorage.setItem('raminta_coach_calc_state', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to local storage:', e);
    }
  }

  // Add click listeners to Deficit tab selectors
  deficitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      deficitTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeDeficitValue = parseInt(tab.dataset.deficit, 10);
      
      calculateActiveGoal();
      saveStateToLocalStorage();
    });
  });

  // Load state from Local Storage on init
  function loadStateFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('raminta_coach_calc_state');
      
      if (savedState) {
        const state = JSON.parse(savedState);

        // Restore gender toggle
        if (state.gender) {
          const genderRadio = document.querySelector(`input[name="gender"][value="${state.gender}"]`);
          if (genderRadio) genderRadio.checked = true;
        }

        // Restore height unit toggle
        if (state.heightUnit) {
          const heightRadio = document.querySelector(`input[name="heightUnits"][value="${state.heightUnit}"]`);
          if (heightRadio) {
            heightRadio.checked = true;
            heightRadio.dispatchEvent(new Event('change'));
          }
        }

        // Restore weight unit toggle
        if (state.weightUnit) {
          const weightRadio = document.querySelector(`input[name="weightUnits"][value="${state.weightUnit}"]`);
          if (weightRadio) {
            weightRadio.checked = true;
            weightRadio.dispatchEvent(new Event('change'));
          }
        }

        // Restore numeric inputs
        if (state.age) ageInput.value = state.age;
        if (state.activity) activitySelect.value = state.activity;
        if (state.heightCm) heightCmInput.value = state.heightCm;
        if (state.heightFt) heightFtInput.value = state.heightFt;
        if (state.heightIn) heightInInput.value = state.heightIn;
        if (state.weightKg) weightKgInput.value = state.weightKg;
        if (state.weightSt) weightStInput.value = state.weightSt;
        if (state.weightStLbs) weightStLbsInput.value = state.weightStLbs;
        if (state.weightLbs) weightLbsInput.value = state.weightLbs;
        if (state.targetWeightKg) targetWeightKgInput.value = state.targetWeightKg;
        if (state.targetWeightSt) targetWeightStInput.value = state.targetWeightSt;
        if (state.targetWeightStLbs) targetWeightStLbsInput.value = state.targetWeightStLbs;
        if (state.targetWeightLbs) targetWeightLbsInput.value = state.targetWeightLbs;

        // Restore active deficit value
        if (state.deficit) {
          activeDeficitValue = parseInt(state.deficit, 10);
          deficitTabs.forEach(tab => {
            if (parseInt(tab.dataset.deficit, 10) === activeDeficitValue) {
              tab.classList.add('active');
            } else {
              tab.classList.remove('active');
            }
          });
        }

        // Auto-submit if minimum fields are complete
        const isHeightComplete = state.heightUnit === 'ft' ? state.heightFt : state.heightCm;
        const isWeightComplete = state.weightUnit === 'kg' ? state.weightKg : (state.weightUnit === 'lbs' ? state.weightLbs : state.weightSt);

        if (isHeightComplete && isWeightComplete && state.age) {
          form.dispatchEvent(new Event('submit'));
        }
      }
    } catch (e) {
      console.error('Failed to load state from local storage:', e);
    }
  }

  // Handle Clear Button Click
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      // Clear input fields
      form.reset();

      // Clear the local storage
      try {
        localStorage.removeItem('raminta_coach_calc_state');
      } catch (e) {
        console.error('Failed to clear local storage:', e);
      }

      // Reset target weight inputs manually because form.reset() clears them
      targetWeightKgInput.value = '';
      targetWeightStInput.value = '';
      targetWeightStLbsInput.value = '';
      targetWeightLbsInput.value = '';

      // Reset unit tracking variables so trigger events run fresh
      activeHeightUnit = null;
      activeWeightUnit = null;

      // Reset unit radio checks in DOM to metric defaults
      const defaultHeightRadio = document.getElementById('height-unit-cm');
      if (defaultHeightRadio) defaultHeightRadio.checked = true;

      const defaultWeightRadio = document.getElementById('weight-unit-kg');
      if (defaultWeightRadio) defaultWeightRadio.checked = true;

      const defaultGenderRadio = document.getElementById('gender-female');
      if (defaultGenderRadio) defaultGenderRadio.checked = true;

      // Re-trigger defaults to set up layout classes and required properties
      if (defaultHeightRadio) defaultHeightRadio.dispatchEvent(new Event('change'));
      if (defaultWeightRadio) defaultWeightRadio.dispatchEvent(new Event('change'));

      // Restore deficit selection to default (Standard 500 kcal)
      activeDeficitValue = 500;
      deficitTabs.forEach(tab => {
        if (parseInt(tab.dataset.deficit, 10) === 500) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      // Reset results display state
      resultsContent.style.display = 'none';
      resultsPrompt.style.display = 'block';
      progressSection.style.display = 'none';
    });
  }

  // Handle copy link to clipboard
  const copyBtn = document.querySelector('.copy-anchor-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const anchor = copyBtn.dataset.anchor;
      const url = window.location.origin + window.location.pathname + '#' + anchor;
      
      navigator.clipboard.writeText(url).then(() => {
        const linkIcon = copyBtn.querySelector('.icon-link');
        const checkIcon = copyBtn.querySelector('.icon-check');
        
        if (linkIcon && checkIcon) {
          linkIcon.style.display = 'none';
          checkIcon.style.display = 'inline-block';
          
          setTimeout(() => {
            checkIcon.style.display = 'none';
            linkIcon.style.display = 'inline-block';
          }, 2000);
        }
      }).catch(err => {
        console.error('Failed to copy URL to clipboard:', err);
      });
    });
  }

  // Trigger initial defaults manually to set classes and required states on load
  const activeHeightRadio = document.querySelector('input[name="heightUnits"]:checked');
  if (activeHeightRadio) activeHeightRadio.dispatchEvent(new Event('change'));

  const activeWeightRadio = document.querySelector('input[name="weightUnits"]:checked');
  if (activeWeightRadio) activeWeightRadio.dispatchEvent(new Event('change'));

  // Run restoration
  loadStateFromLocalStorage();
});
