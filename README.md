# CleanCity: Waste Pickup Scheduler

A realistic testable web application designed for QA students to practice both manual and automated testing. This React-based application simulates a waste management system for African cities with intentional flaws for testing practice.

## 🎯 Purpose

This application is specifically designed to provide QA learners with a realistic testing environment that includes:
- Multiple user flows and pages
- Form validation and error handling
- UI accessibility issues
- Boundary testing scenarios
- Filtering and sorting functionality
- Simulated admin workflows
- Responsive design testing
- Intentional bugs and inconsistencies

## 🚀 Features

### Pages & Functionality

1. **Home Page (`/`)**
   - Waste pickup request form
   - Form validation (with intentional flaws)
   - Success message display

2. **Dashboard (`/dashboard`)**
   - Table of all pickup requests
   - Filtering by status and location
   - Status badges and responsive design

3. **Feedback Page (`/feedback`)**
   - Report missed pickups
   - Feedback submission form
   - Request ID validation

4. **Awareness Page (`/awareness`)**
   - Educational content about waste management
   - Images with missing alt-text (accessibility testing)
   - Responsive grid layout

5. **Admin Panel (`/admin`)**
   - Request management interface
   - Status update functionality
   - Data persistence testing

## 🐛 Intentional Flaws for Testing Practice

### 1. Home Page - Missing Date Validation
- **Issue**: The "Preferred Pickup Date" field is not validated as required
- **Testing Opportunity**: Form validation testing, boundary testing
- **Expected Behavior**: Should require a date selection

### 2. Dashboard - Location Filter Bug
- **Issue**: Filtering by "Eldoret" shows Nairobi requests instead
- **Testing Opportunity**: Filter functionality testing, data consistency
- **Expected Behavior**: Should show only Eldoret requests

### 3. Feedback Page - Multiple Validation Issues
- **Issue**: Request ID accepts invalid formats and comments can be empty
- **Testing Opportunity**: Input validation, boundary testing, special character handling
- **Expected Behavior**: Should validate Request ID format and require comments

### 4. Awareness Page - Accessibility Issues
- **Issue**: All images are missing alt-text attributes
- **Testing Opportunity**: Accessibility testing, screen reader compatibility
- **Expected Behavior**: All images should have descriptive alt-text

### 5. Admin Panel - UI Update Bug
- **Issue**: "Mark as Scheduled" button doesn't update the UI visually
- **Testing Opportunity**: UI state management, data persistence verification
- **Expected Behavior**: UI should update immediately after status change

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Styling**: CSS3 with responsive design
- **Data Storage**: localStorage (no backend required)
- **Testing**: React Testing Library (included)

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd cleancity-waste-scheduler
   
   # Or extract the downloaded files
   cd cleancity-waste-scheduler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application should load with the home page

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🌐 Deployment to Netlify

### Option 1: Drag & Drop (Recommended for beginners)

1. Run `npm run build` to create the production build
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Drag the `build` folder to the Netlify dashboard
4. Your site will be deployed automatically

### Option 2: Git Integration

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy automatically on every push

## 🧪 Testing Guide for QA Students

### Manual Testing Scenarios

#### 1. Form Validation Testing
- **Test Case**: Submit form without required fields
- **Expected**: Error messages should appear
- **Bug**: Date field doesn't show validation error

#### 2. Filter Functionality Testing
- **Test Case**: Filter by "Eldoret" location
- **Expected**: Show only Eldoret requests
- **Bug**: Shows Nairobi requests instead

#### 3. Accessibility Testing
- **Test Case**: Use screen reader on Awareness page
- **Expected**: Images should have descriptions
- **Bug**: Missing alt-text on all images

#### 4. UI State Testing
- **Test Case**: Use "Mark as Scheduled" button in Admin panel
- **Expected**: UI should update immediately
- **Bug**: UI doesn't refresh (check localStorage)

#### 5. Boundary Testing
- **Test Case**: Enter very long text in form fields
- **Expected**: Should handle gracefully
- **Bug**: May cause layout issues

### Automated Testing

The project includes React Testing Library for automated testing:

```bash
npm test
```

### Test Data

The application comes with pre-filled mock data:
- **Sample Requests**: REQ001-REQ005 with various statuses
- **Sample Feedback**: FB001 for REQ004
- **Locations**: Nairobi, Kisumu, Mombasa, Eldoret
- **Waste Types**: General, Recyclable, Hazardous

## 📱 Responsive Design

The application is designed to be mobile-friendly with:
- Responsive navigation
- Mobile-optimized tables
- Flexible grid layouts
- Touch-friendly buttons

## 🔧 Customization

### Adding New Flaws
To add more testing scenarios, you can:
1. Modify the data service (`src/services/dataService.js`)
2. Update form validation logic
3. Add UI inconsistencies
4. Introduce new filtering bugs

### Styling Changes
- Main styles: `src/index.css`
- Component-specific styles: `src/App.css`
- Responsive breakpoints: 768px for mobile

## 📚 Learning Resources

### Testing Concepts Covered
- **Functional Testing**: Form validation, CRUD operations
- **UI Testing**: Responsive design, accessibility
- **Integration Testing**: Data flow between components
- **Regression Testing**: Status updates and data persistence
- **Boundary Testing**: Input validation and edge cases

### Tools You Can Use
- **Browser DevTools**: For debugging and responsive testing
- **Screen Readers**: For accessibility testing
- **Postman/Insomnia**: For API testing (if backend added)
- **Selenium/Cypress**: For automated testing
- **Lighthouse**: For performance and accessibility audits

## 🤝 Contributing

This is an educational project designed for QA training. Feel free to:
- Add more intentional bugs for testing practice
- Improve the UI/UX design
- Add new features for testing scenarios
- Create additional test cases

## 📄 License

This project is created for educational purposes. Feel free to use and modify for QA training and learning.

## 🆘 Support

For questions about the application or testing scenarios:
- Check the testing notes in each component
- Review the intentional flaws documentation
- Use browser DevTools for debugging
- Test with different browsers and devices

---

**Happy Testing! 🧪✨** 