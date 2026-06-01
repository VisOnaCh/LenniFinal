<template>
    <div class="field__t">
        <label class="field_input-label">
            <span class="field__title field__label">{{ label }}</span>

            <textarea 
            class="field__t-textarea" 
            v-model="value"
            :placeholder="placeholder"
            ></textarea>

            <span v-if="errorMessages && submitCount" class="field__error" field-error>
                {{ errorMessage }}
            </span>
        </label>
    </div>
</template>

<script setup>
import { useField} from "vee-validate";


const props = defineProps({
    initialValue: {
        default: undefined,
    },
    name: {
        type:String,
        required: true,
    },
    label: {
        type: String,
        default:"",
    },
    placeholder:{
        type: String,
        default:"",
    },
    rules: {
        type: Object,
        default: () => ({}),
    },
    submitCount: {
        type: Number,
        default:0,
    },
    });
    
    const {errorMessage, value} = useField(props.name, props.rules, {
        initialValue: props.initialValue,
    });
</script>

<style lang="less">
.field__t {
    margin-left: 137px;
    margin-top: 30px;
    margin-right: 117px;
    &-textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: none;
        height: 100px;
        border-radius: 5px;
        background-color: @white;
        padding: 17px 20px 16px;
        font-size: 16px;
        line-height: 1.375;
        @media @bw400 {
            font-size: 14px;
        } 
    }
}
</style>