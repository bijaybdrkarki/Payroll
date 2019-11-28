# Assignment2
ABC college employees Payroll

Detailed Problem Specification

ABC College (ABCC) is a newly established Community College Located in Ontario with a student population of approximately 
five thousand (5000) and a l arge competent workforce. ABCC staff is divided into two (2) major groups, that is, regular 
staff and faculty. Regular staff are paid a fixed gross salary each month, however their salary is prorated in the event 
the employee does not clock 160 hours for the month. Whereas, Faculty salaries are generated by the number of hours worked 
multiplied by their rate of pay plus a teaching allowance. Faculty rate of pay and teaching allowances are influenced by 
their level of qualifications.

All employees must incur a CIT (Canadian Income tax), that is, 25% of their gross salary and a health surcharge fee on 
their i ncome. However, all employees are entitled to a Personal Canadian Income Tax Free Allowance of 2500.00 per month. 
This means that you do not pay i ncome tax on your first 2500.00 of income, thus, you pay no i ncome tax at all if you earn
less than this amount. Due to a failure i n the existing manual payroll system, employees throughout the College have been 
paid in accurate and erroneous salaries. They said issue has caused several problems throughout the college, protest, 
cancellation of classes, j ust to name a few. To alleviate the problems, the president of the college mandated that a script 
be implemented to generate and process salaries for employees throughout the college. Luckily, you have been contracted as 
a Web programmer to complete the development of the Payroll Web Application for the college. The web application must allow
an Accounts clerk to generate any employee pay slip for any given month.

Below lists the following features and business rules that must be i mplemented within the web applicaiton to ensure the
correct calculation of salaries:-
1. Develop a properly designed i nterface that all an Accounts clerk to enter the employee number, name, department, 
   hours’ work for a given month and an employee type code for an employee.

    a. An employee type code can ONLY be ‘ F’ or ‘ f’ for Faculty and ‘ R’ or ‘ r’ for regular workers.
    
2. For Faculty :
    
    a. Allow the Accounts clerk to enter a Faculty qualification code.
    b. A qualification code can be either be “M ” OR “B ” . A faculty with a qualification code “M” would imply that 
       the faculty have obtained a master’s degree. Whereas, a faculty with a qualification code “B” would imply that the
       faculty has only obtained a bachelor’s degree.
    c. Faculty with a master’s degree would be paid $175 per hour and their teaching allowance would be $1500.00 per month.
       However, faculty with just a bachelor’s degree would be paid $100 per hour and their teaching allowance would be 
       $600 per month.
    d. Please note, faculty gross salaries are generated by the number of hours worked for a given month multiplied by their
       rate of pay plus a teaching allowance.

3. For Regular workers :
    
    a. Allow the Accounts clerk to enter the regular worker’s fixed salary.
    b. ONLY if a Regular worker works 160 hours for the month then they would be paid that flat fixed salary.
    c. However, if a regular worker DID NOT WORK 160 hours for the month then their fixed salary has to be prorated. 
       Thus, they would only be paid for the hours they worked for the month. To do this, your script would have to multiply
       the employee hourly rate by their hours of work.
    d. To get the employee hourly rate your program would have to divide the fixed salary by 160. (fixed salary/ 160).
    e. Regular workers are to be paid double time for all hours worked over 160 for the month.

4. Calculate Deductions :
   
   The mandatory deductions that all employees incur on their income are :-
     1. A Canadian Income tax of 25% of their gross salary.
     2. A health surcharge fee.
        i. If an employee earns more than $3000.00 per month then their health surcharge fee would be $33.00.
        ii. If an employee earns $3000.00 or l ess than, then their health surcharge fee would be $19.20.
     3. Note, ALL employees are entitled to a Canadian Personal Income Tax Free Allowance of 2,500.00 per month.
     
5. Calculate Net pay:
   
   a. The net pay for all employees i s calculated by subtracting all deductions from the employee's gross salary.

6. Output:
  
  a. After all the information is entered by the Accounts clerk, all relevant calculations must then be performed and 
   then your app should generate the pay slip for that employee, listing all the following information to the console : 
   Employee number, name, department, employee type, number of hours worked, gross salary, deductions and net pay.
