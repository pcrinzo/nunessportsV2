$(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        checkbox.prop("checked", this.checked);
    });

    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });

// Handle delete button click in the table row
$('body').on('click', '.delete', function (event) {
    event.preventDefault(); // Prevent the default action

    // Get the product ID from the checkbox in the same row
    var productId = $(this).closest('tr').find('input[type="checkbox"]').val();

    // Check if the checkbox is selected
    var isChecked = $(this).closest('tr').find('input[type="checkbox"]').prop("checked");

    if (isChecked) {
        console.log("Delete button clicked for product ID: " + productId);

        // Store the product ID in the hidden input field in the modal
        $('#deleteProductId').val(productId);

        // Show the modal
        $('#deleteProductModal').modal('show');
    } else {
        console.warn("No product selected for deletion.");
        alert("Por favor, selecione um produto para deletar.");  // Show a warning to the user
    }
});

// Handle modal form submission
$('#deleteProductForm').submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the product ID from the hidden input field
    var productId = $('#deleteProductId').val();
    console.log("Form submitted for product ID: " + productId);

    // Send AJAX request to delete product
    deleteProduct(productId);

    // Close the modal
    $('#deleteProductModal').modal('hide');
});


   // Function to send AJAX request to delete product
   function deleteProduct(productId) {
       $.ajax({
           type: 'DELETE',
           url: '/produto/' + productId,
           success: function (response) {
               console.log('Product deleted successfully:', response);
               // Reload the page
                           location.reload();
           },
           error: function (error) {
               console.error('Error deleting product:', error);
               // Handle error or show user a message
           }
       });
   }


    // Handle modal form submission
    $('#deleteProductForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Handle delete form submission logic here
        var productId = $('#deleteProductId').val();
        console.log("Form submitted for product ID: " + productId);

        // Close the modal if needed
        $('#deleteProductModal').modal('hide');

        // Add any additional logic as needed, e.g., send delete request to the server
        // ...
    });
});
