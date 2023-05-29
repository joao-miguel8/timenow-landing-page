const paymentsToggle = document.querySelector("input[type=checkbox]");
const paymentPrices = document.querySelectorAll(".card__cost h5")
const paymentLabelType = document.querySelectorAll(".card__cost span")

paymentsToggle.addEventListener("click", togglePaymentPlan)

const paymentsPricingPlans = {
  monthlyPayments: {
    basicPlan: 25,
    premiumPlan: 35,
    premiumPlusPlan: 45,
  },
  yearlyPayments: {
    basicPlan: 50,
    premiumPlan: 75,
    premiumPlusPlan: 100,
  }
}
// increment, access each value in object

function togglePaymentPlan() {
  // logic to check if plan is toggled
  // first if block is yearly Costs
  if (paymentsToggle.checked === true) {
    
    // looping over each html price element
    for (let i = 0; i < paymentPrices.length; i++) {
      // console.log(paymentPrices[i]);
      let yearlyPriceValues = (Object.values(paymentsPricingPlans.yearlyPayments)[i]);
      paymentPrices[i].textContent = `$${yearlyPriceValues}`
    }
  } else {
    // else statement to handle monthly payments
    for (let i = 0; i < paymentPrices.length; i++) {
let monthlyPriceValues = (Object.values(paymentsPricingPlans.monthlyPayments)[i]);
      paymentPrices[i].textContent = `$${monthlyPriceValues}`
  }
}
}


