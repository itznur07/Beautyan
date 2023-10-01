import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import DocumentPicker from "react-native-document-picker";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomOrder = () => {
  const navigate = useNavigation;
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      
      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );

      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        throw err;
      }
    }
  };

  /** Form Hook */
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  /** Form Submit */
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          {/* topbar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 10,
            }}
          >
            <AntDesign
              onPress={() => navigate.navigate("Home")}
              name='leftcircleo'
              size={18}
            />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Custom Order
            </Text>
          </View>
          {/* topbar end */}
          {/* file upload */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 150,
            }}
          >
            <TouchableOpacity onPress={pickDocument}>
              <AntDesign color='gray' name='pluscircleo' size={120} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginTop: 10,
                color: "gray",
              }}
            >
              Upload Product Image
            </Text>
          </View>
          {/* file upload end */}
          {/* product information */}
          <View style={{ marginTop: 50 }}>
            {/* product name */}
            <View>
              <Controller
                name='name'
                control={control}
                rules={{
                  required: "Product name is required",
                  minLength: {
                    value: 3,
                    message: "Product name must be at least 3 characters",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Product name'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoCapitalize={true}
                    keyboardType=''
                    style={{
                      borderWidth: 0.5,
                      borderColor: "gray",
                      fontSize: 16,
                      paddingVertical: 14,
                      borderRadius: 12,
                      paddingHorizontal: 20,
                    }}
                  />
                )}
              />
              {errors.name && (
                <Text style={{ color: "red", marginTop: 1 }}>
                  {errors.name.message}
                </Text>
              )}
            </View>
            {/* product qty */}
            <View style={{ marginTop: 20 }}>
              <Controller
                name='qty'
                control={control}
                rules={{
                  required: "Product qty is required",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Product Quantity'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoCapitalize={true}
                    style={{
                      borderWidth: 0.5,
                      borderColor: "gray",
                      fontSize: 16,
                      paddingVertical: 14,
                      borderRadius: 12,
                      paddingHorizontal: 20,
                    }}
                  />
                )}
              />
              {errors.qty && (
                <Text style={{ color: "red", marginTop: 1 }}>
                  {errors.qty.message}
                </Text>
              )}
            </View>
            {/* product description or message */}
            <View style={{ marginTop: 20 }}>
              <Controller
                name='message'
                control={control}
                rules={{
                  required: "Message qty is required",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Message'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoCapitalize={true}
                    style={{
                      borderWidth: 0.5,
                      borderColor: "gray",
                      fontSize: 16,
                      paddingVertical: 14,
                      borderRadius: 12,
                      paddingHorizontal: 20,
                    }}
                  />
                )}
              />
              {errors.message && (
                <Text style={{ color: "red", marginTop: 1 }}>
                  {errors.message.message}
                </Text>
              )}
            </View>
            {/* send button */}
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#000",
                paddingVertical: 14,
                borderRadius: 14,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>
          {/* product information end */}
        </View>
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomOrder;
