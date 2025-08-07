



const calculateButton = document.querySelector('.calculate-btn');

calculateButton.addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value)*12;
    const interest = parseFloat(document.getElementById('interest').value)/100/12;

    if (isNaN(amount) || amount <= 0) {
        return alert('Please enter a valid amount.');
    }

    if (isNaN(term) || term <= 0) {
        return alert('Please enter a valid term in years.');
    }

    if (isNaN(interest) || interest <= 0) {
        return alert('Please enter a valid interest rate.');
    }

    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked')?.value;
    let monthlyRepayment, totalRepayment;

    if (mortgageType == 'repayment') {
        monthlyRepayment = (amount * interest *((1+ interest)**term) / ((1+interest)**term-1));
        totalRepayment = monthlyRepayment * term;
    } else {
        monthlyRepayment = amount * interest;
        totalRepayment = monthlyRepayment * term + amount;
    }

    document.getElementById('monthly-result').innerHTML = `<span>$</span> ${monthlyRepayment.toFixed(2)}`;
    document.getElementById('total').innerHTML = `<span>$</span> ${totalRepayment.toFixed(2)}`;

    
});

