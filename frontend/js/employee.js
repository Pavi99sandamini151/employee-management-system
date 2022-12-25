getAllEmployees();
function saveEmployee(){
    let name   =$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number =$('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/cloud/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "empID":"",
            "empName":name,
            "empAddress":address,
            "empNumber":number
        }),
        success: function (data) {
            alert("Employee added")
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}

function updateEmployee(){
    let empID  =$('#exampleFormControlInput1').val();
    let name   =$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number =$('#exampleFormControlInput4').val();

    if (!empID || !name || !address || !number) {
        alert("Please enter all required fields");
        return;
    }

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/cloud/employee/updateEmployee",
        async: true,
        data: JSON.stringify({
            "empID": empID,
            "empName": name,
            "empAddress": address,
            "empNumber": number
        }),
        success: function(data) {
            // Show a success message and refresh the table
            alert("Updated");
            getAllEmployees();
        },
        error: function(xhr, exception) {
            // Show an error message
            alert("Error updating employee");
            console.log(xhr);
        }
    });
}

function deleteEmployee(){
    let empID   =$('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/cloud/employee/deleteEmployee/"+empID,
        async:true,
        success: function (data) {
            alert("Employee Deleted")
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}

function getAllEmployees(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/cloud/employee/getAllEmployees",
        async:true,
        success: function (data) {
            if(data.code === "00"){
                $('#empTable').empty();
                for(let emp of data.content){
                    let empID   = emp.empid
                    let Name    = emp.empName
                    let Address = emp.empAddress
                    let Number  = emp.empNumber

                    var row = `<tr><td>${empID}</td><td>${Name}</td><td>${Address}</td><td>${Number}</td></tr>`
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}
$(document).ready(function () {
    $(document).on('click', '#empTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);

    })
})



