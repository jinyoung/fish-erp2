<template>
    <v-card outlined>
        <v-card-title>
            Purchase # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="PurchaseNo" v-model="item.purchaseNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="PurchaseType" v-model="item.purchaseType" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="PurchaseDate" v-model="item.purchaseDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="WarehouseArrivalDate" v-model="item.warehouseArrivalDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="StorageFeePaymentDate" v-model="item.storageFeePaymentDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Boolean label="StorageFeePaymentStatus" v-model="item.storageFeePaymentStatus" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MainShipName" v-model="item.mainShipName" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ProductName" v-model="item.productName" :editMode="editMode" @change="change" />
            </div>
            <AccountId offline label="AccountId" v-model="item.accountId" :editMode="false" :key="false" @change="change" />
            <PurchaseDetailManager offline label="PurchaseDetails" v-model="item.purchaseDetails" :editMode="false" @change="change" />
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple lighten-2" large @click="goList">List</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode"
            >
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'PurchasePurchaseDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
            editMode: false,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/purchases/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
            goList() {
                var path = window.location.href.slice(window.location.href.indexOf("/#/"), window.location.href.lastIndexOf("/#"));
                path = path.replace("/#/", "/");
                this.$router.push(path);
            },
            edit() {
                this.editMode = true;
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.item._links.self.href))
                    }

                    this.editMode = false;

                    this.$emit('input', this.item);
                    this.$emit('delete', this.item);

                } catch(e) {
                    console.log(e)
                }
            },
        },
    };
</script>
