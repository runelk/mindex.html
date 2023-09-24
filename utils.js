/**
 * Small function for preparing template strings.
 * 
 * Usage:
 * const title = 'My Title';
 * const description = 'My Description';
 * 
 * const html = h`
 *  <div class="container">
 *   <h1>${title}</h1>
 *  <p>${description}</p>
 * </div>
 * 
 */
function h(s, ...args) {
  return s.reduce((acc, cur, i) => acc + cur + (args[i] || ''), '')
}

export { h }