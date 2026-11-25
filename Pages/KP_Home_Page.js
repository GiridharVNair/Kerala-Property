export class KP_Home_Page{
 /**
     * 
     * @param {import('@playwright/test').page} page 
     */

constructor(page)
{
    this.page=page;
    this.logo=page.getByAltText("Kerala Property");
    this.checkmyprop=page.getByText("My Properties");
    this.checkname=page.locator(".fw-bold");
    this.myhome=page.getByText("My Home");
    this.myaccount=page.locator(".d-block.p-3.rounded.ps-4");

}

 async myaccntclick()
    {
        await this.myaccount.click();
    }




}