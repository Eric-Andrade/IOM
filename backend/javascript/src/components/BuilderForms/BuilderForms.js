import React, { Component } from 'react'
import { Draggable, Droppable } from 'react-drag-and-drop'
import Form from 'react-jsonschema-form'
import SchemaField from 'react-jsonschema-form/lib/components/fields/SchemaField'
// import styles from './BuilderForms.css'

function pickKeys (source, target, excludedKeys) {
  const result = {}

  let isExcluded
  for (let key in source) {
    isExcluded = excludedKeys.indexOf(key) !== -1
    if (isExcluded) {
      continue
    }
    result[key] = target[key]
  }
  return result
}

function shouldHandleDoubleClick (node) {
  if (node.tagName === 'INPUT' &&
      node.getAttribute('type') === 'number') {
    return false
  }
  return true
}

class BuilderForms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editedSchema: props.schema
    }
  }

  componentWillUnMount () {
    console.log('unmounted!')
  }

  onChanged ({formData}) {
    this.setState({editedSchema: formData})
  }

  submited () {
    console.log('Whop')
  }

  onDrop (data) {
    console.log(data)
    // => banana
  }

  render () {
    const schema = {
      type: 'object',
      properties: {
        firstName: {
          'type': 'string',
          'title': 'First name'
        },
        lastName: {
          'type': 'string',
          'title': 'Last name'
        },
        foo: {
          type: 'object',
          properties: {
            bar: {type: 'string'}
          }
        },
        baz: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              description: {
                'type': 'string'
              }
            }
          }
        }
      }
    }

    const uiSchema = {
      firstName: {
        'ui:autofocus': true,
        'ui:emptyValue': ''
      },
      foo: {
        bar: {
          'ui:widget': 'textarea'
        }
      },
      baz: {
        // note the 'items' for an array
        items: {
          description: {
            'ui:widget': 'textarea'
          }
        }
      }
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Form schema={schema}
              uiSchema={uiSchema}
              onChange={this.onChange.bind(this)}
              onSubmit={this.submited} />
          </div>
          <div className='col-md-4'>
            <div>
              <ul>
                <Draggable type='fruit' data='banana'><li>Banana</li></Draggable>
                <Draggable type='fruit' data='apple'><li>Apple</li></Draggable>
                <Draggable type='metal' data='silver'><li>Silver</li></Draggable>
              </ul>
              <div style='background-color: red'>
                <Droppable
                  types={['fruit']} // <= allowed drop types
                  onDrop={this.onDrop.bind(this)}>
                  <ul className='Smoothie' />
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BuilderForms

// export default class EditableField extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {edit: true, schema: props.schema}
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({schema: nextProps.schema})
//   }

//   handleEdit(event) {
//     event.preventDefault()
//     if (shouldHandleDoubleClick(event.target)) {
//       this.setState({edit: true})
//     }
//   }

//   handleUpdate({formData}) {
//     // Exclude the 'type' key when picking the keys as it is handled by the
//     // SWITCH_FIELD action.
//     const updated = pickKeys(this.props.schema, formData, ['type'])
//     const schema = {...this.props.schema, ...updated}
//     this.setState({edit: false, schema})
//     this.props.updateField(
//       this.props.name, schema, formData.required, formData.title)
//   }

//   handleDelete(event) {
//     event.preventDefault()
//     if (confirm('Are you sure you want to delete this field?')) {
//       this.props.removeField(this.props.name)
//     }
//   }

//   handleCancel(event) {
//     event.preventDefault()
//     this.setState({edit: false})
//   }

//   handleDrop(data) {
//     const {name, swapFields, insertField} = this.props
//     if ('moved-field' in data && data['moved-field']) {
//       if (data['moved-field'] !== name) {
//         swapFields(data['moved-field'], name)
//       }
//     } else if ('field' in data && data.field) {
//       insertField(JSON.parse(data.field), name)
//     }
//   }

//   render() {
//     const props = this.props

//     if (this.state.edit) {
//       return (
//         <FieldPropertiesEditor
//           {...props}
//           onCancel={this.handleCancel.bind(this)}
//           onUpdate={this.handleUpdate.bind(this)}
//           onDelete={this.handleDelete.bind(this)} />
//       )
//     }

//     if (props.schema.type === 'object') {
//       if (!props.name) {
//         // This can only be the root form object, returning a regular SchemaField.
//         return <SchemaField {...props} idSchema={{$id: props.name}} />
//       }
//     }

//     return (
//       <DraggableFieldContainer
//         draggableType='moved-field'
//         droppableTypes={['moved-field', 'field']}
//         dragData={props.name}
//         onEdit={this.handleEdit.bind(this)}
//         onDelete={this.handleDelete.bind(this)}
//         onDoubleClick={this.handleEdit.bind(this)}
//         onDrop={this.handleDrop.bind(this)}>
//         <SchemaField {...props}
//           schema={this.state.schema}
//           idSchema={{$id: props.name}} />
//       </DraggableFieldContainer>
//     )
//   }
// }
