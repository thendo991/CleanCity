### Login Behavior Inconsistencies
1. **Invalid Credentials Handling**  
   - Expected: Display error message on failed login  
   - Current: Redirects to profile page  
   - Priority: High  
   - Affected Tests: `test_login_with_credentials[invalid@email.com-wrongpass-False-True]`