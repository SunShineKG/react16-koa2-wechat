import React from 'react'
import { Upload, Icon, Modal } from 'antd';

export default class UploadImg extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  componentDidMount() {
    this.setState({fileList: this.props.data || []});
  }

  handleChange = ({fileList}) =>{
    this.setState({fileList});
    this.props.pictureChange(this.state.fileList)
  }

  render() {
    const { previewVisible, previewImage } = this.state;
    const fileList = this.state.fileList
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/v1/common/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}