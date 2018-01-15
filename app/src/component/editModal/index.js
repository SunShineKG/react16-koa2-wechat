import React from 'react'
import { Modal, Button } from 'antd';

export default class EditModal extends React.Component {

  render() {
    const {
      visible,
      handleCancel,
      handleOk,
      title,
      modalWidth,
      showModal } = this.props;
    return (
      <div>
        <Modal
          visible = { visible }
          title = { title }
          onOk = { handleOk }
          onCancel = { handleCancel }
          width = { modalWidth || 520 }
          footer = {[
            <Button key="back" onClick={ handleCancel }>取消</Button>,
            <Button key="submit" type="primary" onClick={ handleOk }>
              确认
            </Button>,
          ]}
        >
          { this.props.children }
        </Modal>
      </div>
    );
  }
}