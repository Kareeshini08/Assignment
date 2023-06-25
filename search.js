var candidates = [
    { name: 'John', location: 'Chennai', jobRole: 'Software Engineer' },
    { name: 'Charlie', location: 'Coimbatore', jobRole: 'Data Analyst' },
    { name: 'David', location: 'Trichy', jobRole: 'UI/UX Designer' },
    { name: 'Anderson', location: 'Coimbatore', jobRole: 'UI/UX Designer' },
    { name: 'Thompson', location: 'Chennai', jobRole: 'Software Engineer' },
    { name: 'Thomas', location: 'Trichy', jobRole: 'Data Analyst' },
    { name: 'Lewis', location: 'Trichy', jobRole: 'UI/UX Designer' },
    { name: 'James', location: 'Chennai', jobRole: 'Software Engineer' },
    { name: 'Sophia', location: 'Coimbatore', jobRole: 'Data Analyst' },
    { name: 'Joseph', location: 'Coimbatore', jobRole: 'UI/UX Designer' },
    { name: 'Grace', location: 'Chennai', jobRole: 'Software Engineer' },
    { name: 'Sarah', location: 'Trichy', jobRole: 'Data Analyst' }
  ];
  
  function searchCandidates() {
    var locationSelect = document.getElementById('location-select').value;
    var jobRoleSelect = document.getElementById('job-role-select').value;
  
    var filteredCandidates = candidates.filter(function(candidate) {
      var isLocationMatch = (locationSelect === '' || candidate.location.toLowerCase() === locationSelect.toLowerCase());
      var isJobRoleMatch = (jobRoleSelect === '' || candidate.jobRole.toLowerCase().includes(jobRoleSelect.toLowerCase()));
      return isLocationMatch && isJobRoleMatch;
    });
  
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
  
    if (filteredCandidates.length > 0) {
      var table = document.createElement('table');
      table.className = 'results-table';
  
      var headerRow = table.insertRow();
      var nameHeader = headerRow.insertCell();
      nameHeader.innerHTML = '<strong>Name</strong>';
      var locationHeader = headerRow.insertCell();
      locationHeader.innerHTML = '<strong>Location</strong>';
      var jobRoleHeader = headerRow.insertCell();
      jobRoleHeader.innerHTML = '<strong>Job Role</strong>';
  
      for (var i = 0; i < filteredCandidates.length; i++) {
        var candidate = filteredCandidates[i];
  
        var row = table.insertRow();
  
        var nameCell = row.insertCell();
        nameCell.textContent = candidate.name;
  
        var locationCell = row.insertCell();
        locationCell.textContent = candidate.location;
  
        var jobRoleCell = row.insertCell();
        jobRoleCell.textContent = candidate.jobRole;
      }
  
      resultsContainer.appendChild(table);
    } else {
      resultsContainer.textContent = 'No candidates found.';
    }
  }
  