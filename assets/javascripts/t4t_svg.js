// Get Properties
// =====================================================

function SVG_getTranslationById (id_obj) {
  const obj = document.getElementById(id_obj)

  ts = obj.getAttribute('transform')
  matches = ts.match(/translate\(\s*([+-]?\d*(?:\.\d*)?),\s*([+-]?\d*(?:\.\d*)?)\)/)
  return { x: matches[1], y: matches[2] }
}

// returns {x, y} of the origin
function SVG_getOriginById (id_obj) {
  const obj = document.getElementById(id_obj)

  switch (obj.tagName) {
    case 'circle':
      ox = obj.cx.animVal.value
      oy = obj.cy.animVal.value
      break
    case 'rect':
      ox = (obj.x + obj.width) / 2
      oy = (obj.y + obj.height) / 2
      break
    default:
      box = obj.getBBox()
      ox = (box.x + box.width) / 2
      oy = (box.y + box.height) / 2
  }

  return { x: ox, y: oy }
}

function SVG_getRadiusById (id_obj) {
  const obj = document.getElementById(id_obj)

  return obj.r.animVal.value
}

function SVG_getMouseAngleTo (svg, id_anch) {
  const anchor = document.getElementById(id_anch)

  // coordinates within svg
  // 3var pt = document.createSVGPoint();
  let pt = svg.createSVGPoint()
  pt.x = anchor.x.animVal.value
  pt.y = anchor.y.animVal.value

  const matrix = anchor.getScreenCTM()
  pt = pt.matrixTransform(matrix)

  const vx = event.pageX - pt.x
  const vy = event.pageY - pt.y

  // use atan2 to get the angle; Atan2 returns radians
  const angleRadians = Math.atan2(vy, vx) // -vy because on screen y is inverted
  let angleDegree = (angleRadians * (360 / (2 * Math.PI)))
  if (angleDegree < 0) { angleDegree += 360 }
  return angleDegree
}

// Manipulations
// =====================================================

function SVG_translateId (id_obj, id_anch, x, y) {
  const anchor = document.getElementById(id_anch)
  const obj = document.getElementById(id_obj)

  obj.setAttribute('transform', `translate(${x},${y})`)
}

function SVG_rotateId (id_rot, id_anch, angle) {
  const anchor = document.getElementById(id_anch)
  const rotor = document.getElementById(id_rot)

  rotstring = `rotate(${angle} ${anchor.x.animVal.value} ${anchor.y.animVal.value})`

  tf = rotor.getAttribute('transform')
  match = tf.match(/rotate\(.*?\)/)
  if (match != null) {
    tf = tf.replace(match[0], rotstring)
  } else {
    tf = `${rotstring}${tf}`
  }

  rotor.setAttribute('transform', tf)
}

function SVG_scaleId (id_obj, x, y) {
  const obj = document.getElementById(id_obj)

  obj.setAttribute('transform', `scale(${x},${y})`)
}

// Set Shape
// =====================================================

function SVG_setLine (id_obj, x_s, y_s, x_t, y_t) {
  const obj = document.getElementById(id_obj)

  obj.setAttribute('d', `M${x_s} ${y_s} ${x_t} ${y_t}`)
}

function SVG_setCircleArc (id_obj, ox, oy, radius, angle) {
  const obj = document.getElementById(id_obj)

  Degree = 1.0 / 360.0 * 2.0 * Math.PI
  let large_arc = 0
  if (angle < 180) { large_arc = 1 }
  sin = Math.sin(angle * Degree)
  cos = Math.cos(angle * Degree)

  obj.setAttribute('d', `m ${ox + radius} ${oy} a ${radius} ${radius} 0 ${large_arc} 0 ${cos * radius - radius} ${sin * radius}`)
}

function SVG_setText (id_obj, text) {
  const obj = document.getElementById(id_obj)

  obj.innerHtml = text
}
