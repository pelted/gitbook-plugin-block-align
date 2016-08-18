# Block align plugin for GitBooks

A quick way of aligning markdown blocks in a GitBook. This should work for websites and generated ebooks.

**Intent**: Collaborators may not know anything about HTML so it is easier to explain one syntax (Markdown with Blocks)
than expect non technical users to keep `<div>, <p>` tags with text alignment styles in their headspace too.

GitBook Example:

```markdown
{% left %} This **will be** aligned left. {% endleft %}

{% right %} This **will be** aligned right. {% endright %}

{% center %} This **will be** centered. {% endcenter %}
```

Result:

```html
<div class="ba-left"><p>This <strong>will be</strong> aligned left.</p></div>

<div class="ba-right"><p>This <strong>will be</strong> aligned right.</p></div>

<div class="ba-center"><p>This <strong>will be</strong> centered.</p></div>
```

<div style="text-align: left;"><p>This <strong>will be</strong> aligned left.</p></div>

<div style="text-align: right;"><p>This <strong>will be</strong> aligned right.</p></div>

<div style="text-align: center;"><p>This <strong>will be</strong> centered.</p></div>
