
fetch('http://localhost:5000/api/leaderboard')
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector('#leaderboard-table tbody');
    data
      .sort((a, b) => b.totalRaised - a.totalRaised)
      .forEach((user, index) => {
        const row = `
          <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.referralCode}</td>
            <td>${user.totalRaised}</td>
          </tr>
        `;
        table.innerHTML += row;
      });
  })
  .catch(err => {
    alert('Failed to load leaderboard data');
    console.error(err);
  });
