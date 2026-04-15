document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginForm').style.display = 'block';
};
document.getElementById('signupBtn').onclick = function() {
    document.getElementById('signupForm').style.display = 'block';
};
document.getElementById('closeLogin').onclick = function() {
    document.getElementById('loginForm').style.display = 'none';
};
document.getElementById('closeSignup').onclick = function() {
    document.getElementById('signupForm').style.display = 'none';
};
//close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('loginForm')) {
        document.getElementById('loginForm').style.display = 'none';
    }
    if (event.target == document.getElementById('signupForm')) {
        document.getElementById('signupForm').style.display = 'none';
    }
};