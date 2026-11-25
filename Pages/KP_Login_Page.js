export class KP_Login_Page{
    /**
     * 
     * @param {import('@playwright/test').page} page 
     */
    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.locator("#ulogin");
        this.passwordfield=page.locator("#upass");
        this.loginbtn=page.locator("#sub_logbtn");
        this.errormsg=page.locator("#errornote");
    }
    
    async setvalues(un,pswd)
    {
        await this.usernamefield.fill(un);
        await this.passwordfield.fill(pswd);
    }
    async loginclick()
    {
        await this.loginbtn.click();
    }
}