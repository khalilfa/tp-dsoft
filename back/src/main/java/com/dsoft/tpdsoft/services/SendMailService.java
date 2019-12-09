package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.model.Item;
import com.dsoft.tpdsoft.model.Summary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;

    private String from = "facundokhalil@gmail.com";

    public void sendMail(String from, String to, String subject, String body) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(from);
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(body);

        this.javaMailSender.send(mailMessage);
    }

    public void sendMailToProvider(Summary summary) {
        String message = this.createMessageToProvider(summary);
        String to = summary.getProvider().getEmail();
        String subject = "Nueva venta realizada: " + summary.getCreateAt().toString();

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(this.from);
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);

        this.javaMailSender.send(mailMessage);
    }

    public void sendMailToClient(Summary summary) {
        String message = this.createMessageToClient(summary);
        String to = summary.getClient().getEmail();
        String subject = "Nueva compra realizada: " + summary.getCreateAt().toString();

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(this.from);
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);

        this.javaMailSender.send(mailMessage);
    }

    public String createMessageToClient(Summary summary) {
        String stringDate = summary.getCreateAt().toString();
        String items = this.generateItemsString(summary.getItems());
        String total = summary.getTotal().toString();
        String deliveryTime = this.calculateDeliveryTimeMax(summary.getItems()).toString();
        return "Acabas de realizar una nueva compra! \n\n" +
                "Datos de la compra: \n\n" +
                "Fecha: " + stringDate + "\n"+
                "Menus: \n" + items + "\n" +
                "Total: " + total + "\n\n" +
                "Tu pedido llegara dentro de " + deliveryTime + " minutos. Que lo disfrutes!";
    }

    public String createMessageToProvider(Summary summary) {
        String username = summary.getClient().getName() + " " + summary.getClient().getLastName();
        String email = summary.getClient().getEmail();
        String address = summary.getClient().getAddress();
        String stringDate = summary.getCreateAt().toString();
        String items = this.generateItemsString(summary.getItems());
        String total = summary.getTotal().toString();
        return "Se acaba de realizar una venta! \n\n" +
                "Datos del cliente: \n" +
                "Cliente: " + username + "\n" +
                "Correo electronico: " + email + "\n" +
                "Direccion: " + address + "\n\n" +
                "Datos de la venta: \n\n" +
                "Fecha: " + stringDate + "\n"+
                "Menus: \n" + items + "\n" +
                "Total: " + total;
    }

    public Integer calculateDeliveryTimeMax(List<Item> items) {
        return items.stream().mapToInt(item -> item.getMenu().getDeliveryTime()).max().getAsInt();
    }

    public String generateItemsString(List<Item> items) {
        StringBuilder itemsWithInfoString = new StringBuilder();
        for (Item item : items) {
            String itemName = item.getMenu().getName();
            String providerName = item.getMenu().getProvider().getName();
            String quantity = item.getQuantity().toString();
            itemsWithInfoString.append("- ").append(itemName).append("\n").append("-- Cantidad: ")
                    .append(quantity).append("\n").append("-- Proveedor: ").append(providerName).append("\n");
        }

        return itemsWithInfoString.toString();
    }
}
