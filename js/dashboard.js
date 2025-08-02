fetch('https://intern-dashboard-backend-6dlu.onrender.com/api/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('welcome').textContent = `Welcome, ${data.name}`;
    document.getElementById('referral-code').textContent = data.referralCode;
    document.getElementById('amount-raised').textContent = data.totalRaised;
  })
  .catch(err => {
    alert('Failed to load user data');
    console.error(err);
  });
