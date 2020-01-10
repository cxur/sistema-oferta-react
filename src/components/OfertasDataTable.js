import React, { Component } from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };




class offersDataTable extends Component {

    state = {
        columns: [
            { title: "oferta ID", field: "ofertaId", render: rowData => this.processUnusualInfo(rowData.ofertaId) },
            { title: "Charge Type", field: "tsAppTipoCargo.nombreCargo", render: rowData => rowData.tsAppTipoCargo == null ? "" : this.processUnusualInfo(rowData.tsAppTipoCargo.nombreCargo) },
            { title: "Credit Type", field: "tsAppTipoLimiteCredito.nombre", render: rowData => rowData.tsAppTipoLimiteCredito == null ? "" : this.processUnusualInfo(rowData.tsAppTipoLimiteCredito.nombre) },
            { title: "User Offer", field: "tsAppUsuarioOferta.nombreUsuario", render: rowData => rowData.tsAppUsuarioOferta == null ? "" : this.processUnusualInfo(rowData.tsAppUsuarioOferta.nombreUsuario) },
            { title: "Offer Name", field: "nombre", render: rowData => this.processUnusualInfo(rowData.nombre) },
            { title: "Concept Code", field: "codigoConcepto", render: rowData => this.processUnusualInfo(rowData.codigoConcepto) },
            { title: "Is Package", field: "esPaquete", render: rowData => this.processUnusualInfo(rowData.esPaquete) },
            { title: "Is Promotion", field: "esPromocion", render: rowData => this.processUnusualInfo(rowData.esPromocion) },
            { title: "is Down", field: "esBaja", render: rowData => this.processUnusualInfo(rowData.esBaja) },
            { title: "Service Code", field: "codServicio", render: rowData => this.processUnusualInfo(rowData.codServicio) },
            { title: "Group Code", field: "codGrupo", render: rowData => this.processUnusualInfo(rowData.codGrupo) },
            { title: "Level Code", field: "codNivel", render: rowData => this.processUnusualInfo(rowData.codNivel) },
            { title: "Country", field: "pais", render: rowData => this.processUnusualInfo(rowData.pais) },
            { title: "Active", field: "activa", render: rowData => this.processUnusualInfo(rowData.activa) },
            { title: "Offer URL", field: "ofertaUrl", render: rowData => this.processUnusualInfo(rowData.ofertaUrl) },
            { title: "Description", field: "descripcionOferta", render: rowData => this.processUnusualInfo(rowData.descripcionOferta) },
            { title: "Gift", field: "esRegalo", render: rowData => this.processUnusualInfo(rowData.esRegalo) },
            { title: "Cost Code", field: "codigoOfertaCosto", render: rowData => this.processUnusualInfo(rowData.codigoOfertaCosto) },
            { title: "No Cost Code", field: "codigoOfertaSinCosto", render: rowData => this.processUnusualInfo(rowData.codigoOfertaSinCosto) },
            { title: "Billing Code", field: "codigoOfertaCargoFactura", render: rowData => this.processUnusualInfo(rowData.codigoOfertaCargoFactura) }],
        data: []
    }

    processUnusualInfo(data) {

        if (data == null) {
            return "";
        }
        if (typeof data == "boolean") {
            return data ? "Yes" : "No"
        } else {
            return data;
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9005/operations/getAllOffers').then(res => {
            const offerList = res.data;
            this.setState({ data: offerList });
        });
    }

    render() {
        return (
            <div>
                <Grid container style={{ width: `calc(100% - 240px)`, marginLeft: '240px', marginTop: '70px' }} spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={12} xl={12} >
                        <Paper style={{ padding: '20px' }}>
                            <TableContainer>
                                <MaterialTable
                                    title="Offers List"
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    icons={tableIcons}
                                />
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default offersDataTable;