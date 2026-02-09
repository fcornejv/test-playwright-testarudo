import { test, expect } from '@playwright/test';

test.describe('Automatización en Testertestarudo', () => {

    // Test Navegación principal - Login - testertestarudo
    test('Los links principales redirigen correctamente', async ({ page }) => {
        await test.step('Estando yo en la web principal https://testertestarudo.com/', async () => {
            await page.goto('https://testertestarudo.com/');
        });

        await test.step('Cuando hago click en "Academia - Micuenta"', async () => {
        const menuAcademia = page.getByText('Academia', { exact: true });
        await menuAcademia.hover();
        await page.getByRole('link', { name: 'Mi Cuenta' }).click();
        });

        await test.step('Soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(/.*dashboard\/profile\//);  
        });

        await test.step('Y ingreso usuario"', async () => {
        await page.getByRole('textbox', { name: 'Username or Email Address' }).pressSequentially('test.prueba.software.calidad@gmail.com', { delay: 100 });        
        });

        await test.step('Y ingreso contraseña"', async () => {
        await page.getByRole('textbox', { name: 'Password' }).pressSequentially('12345678', { delay: 100 });
        });

        await test.step('Y presiono clic en boton Log In"', async () => {
        await page.getByRole('button', { name: 'Log In' }).click({ force: true });
        });

        await test.step('Entonces soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(url => url.toString().includes('/dashboard/'));
        });

        await test.step('Entonces soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(url => url.toString().includes('/dashboard/'));
        });

        await page.getByRole('link', { name: ' Download Certificates' }).click();




//await page.goto('https://testertestarudo.com/dashboard/download-certificate/');

    await test.step('Localizar curso de Postman y generar certificado', async () => {
        const contenedorPostman = page.locator('.academy-col-lg-4').filter({ 
            hasText: 'Curso Introductorio de Postman' 
        });

        const botonDownload = contenedorPostman.getByRole('link', { 
            name: 'Download Certificate', 
            exact: true 
        });

        await botonDownload.click();
        console.log('LOG: Clic realizado en el curso de Postman.');
    });

    await test.step('Validar URL y finalizar', async () => {
        // 1. Esperamos la URL (según tu imagen, esto ya funciona)
        await expect(page).toHaveURL(/.*source=certificate/, { timeout: 15000 });
        
        // 2. Tomamos la captura
        //await page.screenshot({ path: 'screenshots/certificado_final.png' });
        console.log('LOG: Certificado validado visualmente.');

        // 3. ¡IMPORTANTE! No pongas browser.close() aquí dentro. 
        // Playwright cerrará la página automáticamente al salir de este bloque.
    });







    });

});