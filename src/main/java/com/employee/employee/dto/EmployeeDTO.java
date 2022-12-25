package com.employee.employee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class EmployeeDTO {
    private int empid;
    private String empName;
    private String empAddress;
    private String empNumber;
}
