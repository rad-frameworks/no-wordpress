# Web Dynamify

![logo](https://raw.githubusercontent.com/wiki/rad-frameworks/web-dynamify/logo-500x214.png)

- You have an html template (free or premiun) and make it dynamic is your goal
- Wordpress is not an option for you.
- You have a minimal knowledge of html
- Do you need to present a MVP or mockup to your boss, tomorrow?

If the previous sentences are true this framework is for you :b

---

# Demo

- npm install
- npm run dev

Go to http://localhost:2708 and you will see **Javascript Platformer** as game title at the bottom of page.

If you want to change it, go to variables/index.json and change the value of **gameTitle** to something like **Tetris**. Server will restart (thanks to npm run dev)

Refresh page and your custom title will be rendered.

---

# Make dynamic your own template

### 1. Html template

Download your html template into web folder. An index.html must be exist.

### 2. index.html variabilization

Put the following code in any part of your index.html

```
<%= my_var %>
```
### 3. Variables

**web/index.html** is default associated to **variables/index.json** in variables folder. So in this file **variables/index.json**, create a var called **my_var**

```json
{
  "my_var": "my simple value"
}
```

[Here](https://github.com/mde/ejs/blob/master/docs/syntax.md) more examples with ejs variables.

If you started with **npm run dev**, just refresh the page and you will see **my simple value** in the web.

---

# More pages

If you need to add dynamic content to another pages like :

- about.html
- Blog.html
- /form/contact.html

You just need to create a json file in the same location  but in **variables** folder:

```
├── web/
│   ├── index.html
│   ├── about.html
│   ├── Blog.html
│   ├── form/
│       ├── contact.html
├── variables/
│   ├── index.json
│   └── about.json
│   └── Blog.json
│   ├── form/
│       ├── contact.json
```

# Technologies

- nodejs
- ejs
- html

# Acknowledgments

- index.html demo : https://github.com/jakesgordon/javascript-tiny-platformer

# Roadmap

- more examples of ejs variables

# Contributors

Thanks goes to these wonderful people :

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">Richard Leon</a></label>
      <br />
    </td>    
  </tbody>
</table>

# License
Web-Dynamify is open-sourced software licensed under the [GNU GPLv3 license](https://choosealicense.com/licenses/gpl-3.0/). Frameworks and libraries has it own licensed

Enjoy :)
