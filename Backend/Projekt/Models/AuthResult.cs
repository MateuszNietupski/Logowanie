﻿using Microsoft.AspNetCore.Identity;

namespace Projekt.Models
{
    public class AuthResult
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public IdentityUser User { get; set; }
        public IList<string> Roles { get; set; }
        public bool Result { get; set; }
        public List<string>? Errors { get; set; }
    }
}