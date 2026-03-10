
/**
 * Delete a table row with an animation
 * @param {HTMLElement} btn - The button that was clicked
 * @param {string} confirmMessage - Optional confirmation message
 */
function deleteRow(btn, confirmMessage = 'Are you sure you want to delete this item?') {
    if (confirm(confirmMessage)) {
        const row = btn.closest('tr');
        row.style.opacity = '0';
        setTimeout(() => {
            row.remove();
        }, 300);
    }
}
