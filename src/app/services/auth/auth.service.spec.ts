import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

fdescribe('AuthService', () => {
  let authService: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    authService = TestBed.get(AuthService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('signup', () => {
    it('should return a user object with a valid username and password', () => {
      const user = {
        userName: 'testuser',
        email: 'testuser@email.com',
        role: 'user',
        password: 'password123'
      };
      const signupResponse = {
        userName: 'testuser',
        email: 'testuser@email.com',
        role: 'user',
        password: '$2a$10$oF7YW1FyOSW3Gw7G4ThbO.ibduCgF3U0gVI/GE9fKQcGtVEBs0B.2'
      };
      let response;

      authService.signup(user).subscribe(res => {
        response = res;
      });

      http.expectOne('/api/User').flush(signupResponse);
      expect(response).toEqual(jasmine.objectContaining(signupResponse));
      http.verify();
    });
  });
});
