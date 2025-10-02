function logout() {
    localStorage.removeItem('hotelCRM_user');
    localStorage.removeItem('hotelCRM_selectedProperty');
    window.location.href = 'login.html';
}