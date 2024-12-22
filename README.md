# bookstack-mathjax-preview

A helper library to add MathJax support to the BookStack Markdown editor preview.

This is a fork of [markdown-it-mathjax3](https://github.com/tani/markdown-it-mathjax3), which is a MarkdownIt plugin adding support for MathJax v3 and SVG rendering. This copy was modified specifically for use in BookStack, more precisely to enable live LaTeX preview when using the markdown editor.

## Quick Start

Update your "Custom HTML Head Content" in BookStack settings:

```html
<script type="importmap">
{
  "imports": {
    "bookstack-mathjax-preview": "https://raw.githubusercontent.com/mspi21/bookstack-mathjax-preview/refs/heads/master/dist/bundle.js"
  }
}
</script>
<script type="module">
import MathJaxPreview from 'bookstack-mathjax-preview';
window.addEventListener('editor-markdown::setup', event => {
  const mdIt = event.detail.markdownIt;
  mdIt.use(MathJaxPreview, { tex: { inlineMath: [['$', '$']] } });
});
</script>
```

Alternatively, you might want to host the bundle elsewhere.

## Customization

This plugin accepts MathJax configuration.
Instead of `<script>window.MathJax = { tex: ..., svg: ...}</script>`,
pass it like `mdIt.use(MathJaxPreview, { tex: ..., svg: ... })`.

## FAQ

- How to attach equation tags?
  -- Pass the options like `mdIt.use(MathJaxPreview, { tex: {tags: 'ams'} })`

## Examples

### Inline

Surround your LaTeX with a single `$` on each side for inline rendering.
```
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Use two (`$$`) for block rendering. This mode uses bigger symbols and centers
the result.

```
$$\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}$$
```

## Syntax

Math parsing in markdown is designed to agree with the conventions set by pandoc:

    Anything between two $ characters will be treated as TeX math. The opening $ must
    have a non-space character immediately to its right, while the closing $ must
    have a non-space character immediately to its left, and must not be followed
    immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some
    reason you need to enclose text in literal $ characters, backslash-escape them and
    they won’t be treated as math delimiters.
